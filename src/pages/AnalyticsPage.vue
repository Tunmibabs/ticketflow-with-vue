<template>
  <DashboardLayout>
    <div class="p-8">
      <h1 class="text-3xl font-bold text-slate-100 mb-8">Analytics</h1>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)]"
        >
          <h2 class="text-xl font-bold text-slate-100 mb-4">Ticket Trends</h2>
          <TicketChart :data="trendData" />
        </div>

        <div
          class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)]"
        >
          <h2 class="text-xl font-bold text-slate-100 mb-4">
            Status Distribution
          </h2>
          <div class="space-y-4">
            <div
              v-for="item in statusData"
              :key="item.status"
              class="flex items-center justify-between"
            >
              <span class="text-slate-300">{{ item.status }}</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    :style="{ width: item.percentage + '%' }"
                    class="h-full bg-blue-500"
                  />
                </div>
                <span class="text-slate-300 w-12 text-right"
                  >{{ item.percentage }}%</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import TicketChart from '../components/TicketChart.vue'

const tickets = ref([])
const currentUser = ref({})

onMounted(() => {
  const user = localStorage.getItem('currentUser')
  if (user) {
    currentUser.value = JSON.parse(user)
  }

  const allTickets = JSON.parse(localStorage.getItem('tickets') || '[]')
  tickets.value = allTickets.filter((t) => t.userId === currentUser.value.id)
})

const trendData = [
  { day: 'Mon', tickets: 12 },
  { day: 'Tue', tickets: 19 },
  { day: 'Wed', tickets: 15 },
  { day: 'Thu', tickets: 25 },
  { day: 'Fri', tickets: 22 },
  { day: 'Sat', tickets: 8 },
  { day: 'Sun', tickets: 5 }
]

const statusData = computed(() => {
  const total = tickets.value.length || 1
  return [
    {
      status: 'Open',
      count: tickets.value.filter(t => t.status === 'open').length,
      percentage: Math.round((tickets.value.filter(t => t.status === 'open').length / total) * 100)
    },
    {
      status: 'In Progress',
      count: tickets.value.filter(t => t.status === 'in-progress').length,
      percentage: Math.round((tickets.value.filter(t => t.status === 'in-progress').length / total) * 100)
    },
    {
      status: 'Closed',
      count: tickets.value.filter(t => t.status === 'closed').length,
      percentage: Math.round((tickets.value.filter(t => t.status === 'closed').length / total) * 100)
    }
  ]
})
</script>
