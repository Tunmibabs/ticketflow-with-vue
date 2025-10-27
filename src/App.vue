<template>
  <div
    id="app"
    class="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
  >
    <ToastContainer />
    <router-view />
  </div>
</template>

<script setup lang="js">
import { provide } from 'vue';
import ToastContainer from './components/ToastContainer.vue';
// Ensure .js extension and correct path
import { createToastContext, ToastSymbol } from './composables/useToast.js';

// Create and provide the context directly from the root App component
const toastContext = createToastContext();
provide(ToastSymbol, toastContext);
</script>
