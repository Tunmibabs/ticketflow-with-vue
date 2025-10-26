<template>
  <div>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 md:hidden z-40"
      @click="$emit('toggle')"
      aria-hidden="true"
    />

    <div
      :class="[
        'fixed md:static top-0 left-0 h-screen bg-slate-900 border-r border-slate-700 p-6 flex flex-col transition-all duration-300 ease-in-out z-50',
        isOpen
          ? 'w-64 translate-x-0'
          : '-translate-x-full md:translate-x-0 md:w-64',
      ]"
    >
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-bold text-blue-400">TicketFlow</h1>
        <button
          @click="$emit('toggle')"
          class="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Close sidebar"
        >
          <svg
            class="w-5 h-5 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav class="flex-1 space-y-2">
        <router-link
          to="/dashboard"
          class="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          @click="handleNavClick"
        >
          Dashboard
        </router-link>
        <router-link
          to="/tickets"
          class="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          @click="handleNavClick"
        >
          Tickets
        </router-link>
        <router-link
          to="/analytics"
          class="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          @click="handleNavClick"
        >
          Analytics
        </router-link>
        <router-link
          to="/settings"
          class="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          @click="handleNavClick"
        >
          Settings
        </router-link>
      </nav>

      <div class="border-t border-slate-700 pt-4">
        <div class="mb-4">
          <p class="text-sm text-slate-400">Logged in as</p>
          <p class="text-slate-100 font-medium truncate">
            {{ currentUser.email }}
          </p>
        </div>
        <button
          @click="$emit('logout')"
          class="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { computed } from "vue";

defineProps({
  isOpen: Boolean,
});

defineEmits(["toggle", "logout"]);

const currentUser = computed(() => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : { email: "" };
});

const handleNavClick = () => {
  if (window.innerWidth < 768) {
    // Emit toggle to close sidebar on mobile
  }
};
</script>
