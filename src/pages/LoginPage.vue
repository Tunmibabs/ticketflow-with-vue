<template>
  <div
    class="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col"
  >
    <div class="flex-1 flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-md">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-[var(--primary)] mb-2">
            TicketFlow
          </h1>
          <p class="text-[var(--muted-foreground)]">Sign in to your account</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-[var(--foreground)] mb-2"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              class="w-full px-4 py-2 bg-[var(--card)] text-[var(--foreground)] rounded-lg border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none"
              placeholder="you@example.com"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-[var(--foreground)] mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="w-full px-4 py-2 bg-[var(--card)] text-[var(--foreground)] rounded-lg border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none"
              placeholder="••••••••"
            />
            <p v-if="errors.password" class="text-red-500 text-sm mt-1">
              {{ errors.password }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {{ isLoading ? "Signing in..." : "Sign In" }}
          </button>
        </form>

        <p class="text-center text-[var(--muted-foreground)] mt-6">
          Don't have an account?
          <router-link
            to="/signup"
            class="text-[var(--primary)] hover:underline"
            >Sign up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from '../composables/useToast'
import { useErrorHandler } from '../composables/useErrorHandler'
import { ERROR_MESSAGES } from '../utils/errorMessages'

const router = useRouter()
const { addToast } = useToast()
const { handleError } = useErrorHandler()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errors = ref({ email: '', password: '' })

const validateForm = () => {
  errors.value = { email: '', password: '' }
  let isValid = true

  if (!email.value) {
    errors.value.email = ERROR_MESSAGES.FORM_EMPTY_EMAIL
    isValid = false
  } else if (!email.value.includes('@')) {
    errors.value.email = ERROR_MESSAGES.FORM_INVALID_EMAIL
    isValid = false
  }

  if (!password.value) {
    errors.value.password = ERROR_MESSAGES.FORM_EMPTY_PASSWORD
    isValid = false
  }

  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find((u) => u.email === email.value && u.password === password.value)

    if (!user) {
      throw new Error(ERROR_MESSAGES.AUTH_INVALID_CREDENTIALS)
    }

    const token = Date.now().toString()
    localStorage.setItem('authToken', token)
    localStorage.setItem('currentUser', JSON.stringify({ id: user.id, email: user.email }))

    addToast('Login successful', 'success')
    router.push('/dashboard')
  } catch (error) {
    handleError(error, { showToast: true })
  } finally {
    isLoading.value = false
  }
}
</script>
