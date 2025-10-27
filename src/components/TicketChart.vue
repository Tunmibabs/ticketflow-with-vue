<template>
  <div class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)]">
    <div class="h-64 flex items-end gap-2">
      <!-- <div
        v-for="item in data"
        :key="item.day"
        class="flex-1 flex flex-col items-center"
      >
        <div
          :style="{ height: (item.tickets / 30) * 100 + '%' }"
          class="w-full bg-[var(--primary)] rounded-t-lg hover:opacity-80 transition-opacity"
        />
        <p class="text-xs text-[var(--muted-foreground)] mt-2">
          {{ item.day }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
  data: Array,
});
</script>
