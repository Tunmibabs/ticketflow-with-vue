<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div
      class="bg-[var(--card)] rounded-lg p-6 max-w-sm w-full mx-4 border border-[var(--border)]"
    >
      <h2 class="text-xl font-bold text-[var(--foreground)] mb-4">
        Delete Ticket
      </h2>
      <p class="text-[var(--muted-foreground)] mb-6">
        Are you sure you want to delete this ticket? This action cannot be
        undone.
      </p>

      <div class="flex gap-4">
        <button
          @click="$emit('confirm')"
          :disabled="isLoading"
          class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {{ isLoading ? "Deleting..." : "Delete" }}
        </button>
        <button
          @click="$emit('cancel')"
          :disabled="isLoading"
          class="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
  isOpen: Boolean,
  isLoading: Boolean,
});

defineEmits(["confirm", "cancel"]);
</script>
