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
</script>

<template>
  <header>
    <nav
      class="mx-auto flex max-w-6xl items-center gap-6 px-4 sm:gap-10 py-6 sm:px-6 lg:px-8"
      aria-label="Main navigation"
    >
      <!-- Logo: "KN" monogram + wordmark, links back to the homepage -->
      <NuxtLink to="/" class="group flex items-center gap-3" aria-label="Kael Nasani — home">
        <span
          class="flex size-9 items-center justify-center rounded-md bg-violet-500 font-logo text-sm font-bold tracking-tight text-white transition-colors group-hover:bg-violet-400"
          aria-hidden="true"
        >
          KN
        </span>
        <span class="flex flex-col leading-none">
          <span class="font-logo text-sm font-semibold tracking-[0.28em] sm:text-base text-zinc-100 uppercase">
            Kael Nasani
          </span>
          <span class="mt-1.5 hidden font-logo text-[0.65rem] tracking-[0.22em] text-zinc-500 uppercase sm:block">
            Developer &amp; Designer
          </span>
        </span>
      </NuxtLink>

      <!-- NuxtLink navigates without reloading the whole page -->
      <ul class="flex items-center gap-5 text-sm font-medium">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="[
              'border-b-2 py-1 transition-colors',
              route.path === link.to
                ? 'border-violet-400 text-zinc-100'
                : 'border-transparent text-zinc-400 hover:text-zinc-100',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
