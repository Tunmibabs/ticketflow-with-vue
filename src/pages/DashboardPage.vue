<template>
  <DashboardLayout>
    <div class="p-8">
      <h1 class="text-3xl font-bold text-slate-100 mb-8">Dashboard</h1>

      <div class="grid md:grid-cols-4 gap-6">
        <StatCard title="Total Tickets" :value="stats.total"/>
        <StatCard title="Open" :value="stats.open"/>
        <StatCard title="In Progress" :value="stats.inProgress"/>
        <StatCard title="Closed" :value="stats.closed"/>
      </div>

      <!-- <div class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 mb-6">Ticket Activity</h2>
        <TicketChart :data="chartData" />
      </div> -->
    </div>
  </DashboardLayout>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import StatCard from '../components/StatCard.vue'
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

const stats = computed(() => ({
  total: tickets.value.length,
  open: tickets.value.filter(t => t.status === 'open').length,
  inProgress: tickets.value.filter(t => t.status === 'in-progress').length,
  closed: tickets.value.filter(t => t.status === 'closed').length
}))

const chartData = [
  { day: 'Mon', tickets: 12 },
  { day: 'Tue', tickets: 19 },
  { day: 'Wed', tickets: 15 },
  { day: 'Thu', tickets: 25 },
  { day: 'Fri', tickets: 22 },
  { day: 'Sat', tickets: 8 },
  { day: 'Sun', tickets: 5 }
]
</script>
