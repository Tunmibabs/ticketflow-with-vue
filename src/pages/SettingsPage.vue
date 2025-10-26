<template>
  <DashboardLayout>
    <div class="p-8">
      <h1 class="text-3xl font-bold text-slate-100 mb-8">Settings</h1>

      <div class="max-w-2xl">
        <div
          class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)]"
        >
          <h2 class="text-xl font-bold text-slate-100 mb-6">
            Profile Settings
          </h2>

          <div class="space-y-6">
            <div>
              <label
                class="block text-sm font-medium text-[var(--foreground)] mb-2"
                >Email</label
              >
              <input
                :value="currentUser.email"
                type="email"
                disabled
                class="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 opacity-50 cursor-not-allowed"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-[var(--foreground)] mb-2"
                >Account Created</label
              >
              <input
                :value="accountCreated"
                type="text"
                disabled
                class="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 opacity-50 cursor-not-allowed"
              />
            </div>

            <div class="border-t border-slate-700 pt-6">
              <h3 class="text-lg font-semibold text-slate-100 mb-4">
                Preferences
              </h3>
              <div class="space-y-4">
                <label class="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked class="w-4 h-4 rounded" />
                  <span class="text-slate-300">Email notifications</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked class="w-4 h-4 rounded" />
                  <span class="text-slate-300">Weekly digest</span>
                </label>
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

const currentUser = ref({})

onMounted(() => {
  const user = localStorage.getItem('currentUser')
  if (user) {
    currentUser.value = JSON.parse(user)
  }
})

const accountCreated = computed(() => new Date().toLocaleDateString())
</script>
