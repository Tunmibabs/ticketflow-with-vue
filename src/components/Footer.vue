<template>
  <footer class="bg-[var(--card)] border-t border-[var(--border)] mt-auto">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold text-[var(--primary)] mb-4">
            TicketFlow
          </h3>
          <p class="text-[var(--muted-foreground)] text-sm">
            Modern ticket management system designed to streamline your
            workflow.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-[var(--foreground)] mb-4">Product</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Features</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Pricing</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Security</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-[var(--foreground)] mb-4">Company</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-[var(--foreground)] mb-4">Legal</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Privacy Policy</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Terms of Service</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors text-sm"
                >Cookie Policy</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-[var(--border)] pt-8">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p class="text-[var(--muted-foreground)] text-sm">
            © {{ currentYear }} TicketFlow. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a
              href="#"
              class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.926-1.715 1.144 0 1.915.76 1.915 1.715 0 .953-.771 1.715-1.926 1.715zm1.586 11.597H3.73V9.859h3.193v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="js">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
