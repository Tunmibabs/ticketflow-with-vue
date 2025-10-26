<template>
  <div class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)]">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-[var(--foreground)] mb-2">Title</label>
        <input
          v-model="formData.title"
          type="text"
          class="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
          placeholder="Ticket title"
        />
        <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-[var(--foreground)] mb-2">Description</label>
        <textarea
          v-model="formData.description"
          class="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
          placeholder="Ticket description"
          rows="4"
        />
        <p v-if="errors.description" class="text-red-500 text-sm mt-1">{{ errors.description }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-[var(--foreground)] mb-2">Status</label>
        <select
          v-model="formData.status"
          class="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div class="flex gap-4">
        <button
          type="submit"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {{ initialData ? 'Update' : 'Create' }}
        </button>
        <button
          type="button"
          @click="$emit('cancel')"
          class="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="js">
import { ref, watch } from 'vue'
import { ERROR_MESSAGES } from '../utils/errorMessages'

const props = defineProps({
  initialData
})

const emit = defineEmits(['submit', 'cancel'])

const formData = ref<Ticket>({
  title: '',
  description: '',
  status: 'open'
})

const errors = ref({ title: '', description: '' })

watch(
  () => props.initialData,
  (newData) => {
    if (newData) {
      formData.value = { ...newData }
    } else {
      formData.value = { title: '', description: '', status: 'open' }
    }
  },
  { immediate: true }
)

const validateForm = () => {
  errors.value = { title: '', description: '' }
  let isValid = true

  if (!formData.value.title.trim()) {
    errors.value.title = ERROR_MESSAGES.FORM_EMPTY_TITLE
    isValid = false
  }

  if (!formData.value.description.trim()) {
    errors.value.description = ERROR_MESSAGES.FORM_EMPTY_DESCRIPTION
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (!validateForm()) return
  emit('submit', formData.value)
}
</script>
