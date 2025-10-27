<template>
  <div
    class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] transition-colors"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-[var(--muted-foreground)] text-sm mb-2">{{ title }}</p>
        <p class="text-3xl font-bold text-[var(--foreground)]">{{ value }}</p>
      </div>
      <div class="text-4xl">{{ icon }}</div>
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
  title: String,
  value: Number,
  icon: String,
});
</script>
