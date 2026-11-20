<!--
  Default layout: the "frame" shared by every page.
  Nuxt uses this file automatically because it is named "default".
  The current page is inserted wherever <slot /> appears.

  The nav floats on top of the page (absolute) so the homepage hero can run
  all the way to the top edge. Each page adds its own top padding and width.
-->
<template>
  <div class="relative flex min-h-screen flex-col">
    <!-- Navigation bar: appears on every page -->
    <NavBar class="absolute inset-x-0 top-0 z-20" />

    <!-- Page content goes here (index.vue or profile.vue) -->
    <main class="flex-1">
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
