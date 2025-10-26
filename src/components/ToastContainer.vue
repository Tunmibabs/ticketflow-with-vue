<!-- eslint-disable-next-line vue/no-setup-props-destructure -->
<template>
  <div class="fixed bottom-4 right-4 z-50 space-y-2">
    <transition-group name="toast" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'px-4 py-3 rounded-lg shadow-lg text-white flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300',
          toast.type === 'success' ? 'bg-green-600' : toast.type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        ]"
      >
        <span>{{ toast.message }}</span>
        <button @click="removeToast(toast.id)" class="text-white hover:opacity-80 transition-opacity">
          ✕
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="js">
import { useToast } from '../composables/useToast'

const { toasts, removeToast } = useToast()
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
