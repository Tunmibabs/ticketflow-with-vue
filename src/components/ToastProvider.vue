<template>
  <slot />
</template>

<script setup lang="js">
import { provide } from 'vue'
import { createToastContext, ToastSymbol } from '../composables/useToast'

const toastContext = createToastContext()
provide(ToastSymbol, toastContext)
</script>
