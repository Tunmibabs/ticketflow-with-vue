<template>
  <div class="flex h-screen bg-slate-950 flex-col">
    <div class="flex flex-1 overflow-hidden">
      <DashboardSidebar :is-open="isSidebarOpen" @toggle="toggleSidebar" @logout="handleLogout" />
      <div class="flex-1 flex flex-col overflow-hidden">
        <div class="md:hidden bg-slate-900 border-b border-slate-700 p-4 flex items-center">
          <button
            @click="toggleSidebar"
            class="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 class="ml-4 text-xl font-bold text-blue-400">TicketFlow</h1>
        </div>
        <div class="flex-1 overflow-auto">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DashboardSidebar from './DashboardSidebar.vue'
import Footer from './Footer.vue'

const router = useRouter()
const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleLogout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('currentUser')
  router.push('/')
}
</script>
