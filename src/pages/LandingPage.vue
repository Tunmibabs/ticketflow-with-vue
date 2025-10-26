<template>
  <div
    class="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden flex flex-col"
  >
    <div class="flex-1">
      <!-- Navigation -->
      <nav
        class="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
      >
        <div class="text-2xl font-bold text-[var(--primary)]">TicketFlow</div>
        <div class="flex gap-4">
          <router-link
            to="/login"
            class="px-6 py-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="px-6 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
          >
            Sign Up
          </router-link>
        </div>
      </nav>

      <!-- Hero Section -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div
          class="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)] rounded-full opacity-5 blur-3xl"
        ></div>
        <div
          class="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--accent)] rounded-full opacity-5 blur-3xl"
        ></div>

        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Manage Your Tickets with
          <span class="text-[var(--primary)]">Ease</span>
        </h1>
        <p
          class="text-xl text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto text-balance"
        >
          A modern ticket management system designed to streamline your workflow
          and keep your team organized.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <router-link
            to="/signup"
            class="px-8 py-3 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </router-link>
          <router-link
            to="/login"
            class="px-8 py-3 rounded-lg border border-[var(--border)] text-[var(--foreground)] font-semibold hover:bg-[var(--card)] transition-colors"
          >
            Sign In
          </router-link>
        </div>

        <!-- Feature Cards -->
        <div class="grid md:grid-cols-3 gap-6 mt-20">
          <div
            class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
          >
            <div class="text-3xl mb-4">📋</div>
            <h3 class="text-lg font-semibold mb-2">Easy Management</h3>
            <p class="text-[var(--muted-foreground)]">
              Create, update, and organize tickets effortlessly
            </p>
          </div>

          <div
            class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <div class="text-3xl mb-4">⚡</div>
            <h3 class="text-lg font-semibold mb-2">Real-time Updates</h3>
            <p class="text-[var(--muted-foreground)]">
              Track ticket status and progress instantly
            </p>
          </div>

          <div
            class="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
          >
            <div class="text-3xl mb-4">🔒</div>
            <h3 class="text-lg font-semibold mb-2">Secure & Private</h3>
            <p class="text-[var(--muted-foreground)]">
              Your data is protected with secure authentication
            </p>
          </div>
        </div>
      </div>

      <!-- Wave Background -->
      <div class="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <WaveSVG />
      </div>
    </div>

  </div>
</template>

<script setup lang="js">
import WaveSVG from '../components/WaveSVG.vue'
</script>
