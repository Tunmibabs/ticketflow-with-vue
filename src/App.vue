<template>
  <div id="app" class="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    <ToastProvider>
      <ToastContainer />
      <router-view />
    </ToastProvider>
  </div>
</template>

<script setup lang="js">
import ToastProvider from './components/ToastProvider.vue'
import ToastContainer from './components/ToastContainer.vue'
</script>
