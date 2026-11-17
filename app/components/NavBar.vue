<!--
  NavBar: the top navigation menu.
  Used inside app/layouts/default.vue. Because it lives in app/components/,
  Nuxt auto-imports it — no `import NavBar from ...` needed.
-->
<script setup lang="ts">
// The menu items. Add an entry here to add a new link.
const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
]

// useRoute() gives us the current URL so we can highlight the active link.
const route = useRoute()

// Full class strings are written out (not built from pieces) so that
// Tailwind can find them when it scans this file.
const baseClass = 'rounded-full px-4 py-2 text-sm font-medium transition-colors'
const activeClass = 'bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30'
const inactiveClass = 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-100'
</script>

<template>
  <!-- sticky + backdrop-blur keeps the nav visible and readable while scrolling -->
  <header class="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      aria-label="Main navigation"
    >
      <!-- Site name / logo links back to the homepage -->
      <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-zinc-100">
        Kael<span class="text-violet-400">.</span>
      </NuxtLink>

      <!-- NuxtLink navigates without reloading the whole page -->
      <ul class="flex items-center gap-1">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="[baseClass, route.path === link.to ? activeClass : inactiveClass]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
