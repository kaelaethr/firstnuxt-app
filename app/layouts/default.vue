<!--
  Default layout: the "frame" shared by every page.
  Nuxt uses this file automatically because it is named "default".
  The current page is inserted wherever <slot /> appears.
-->
<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navigation bar: appears on every page -->
    <NavBar />

    <!-- Page content goes here (index.vue or profile.vue) -->
    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
      <slot />
    </main>

    <!-- Simple footer, also shared by every page -->
    <footer class="border-t border-zinc-800/80 py-6 text-center text-sm text-zinc-500">
      &copy; {{ year }} Khaiel Aldren A. Nasani &middot; Built with Nuxt &amp; Tailwind CSS
    </footer>
  </div>
</template>

<script setup lang="ts">
// Current year for the footer, so it never goes out of date.
const year = new Date().getFullYear()
</script>
