<!--
  app.vue is the root component of the whole Nuxt app.
  - <NuxtLayout> renders the layout (app/layouts/default.vue by default).
  - <NuxtPage> renders whichever file in app/pages/ matches the current URL.
-->
<script setup lang="ts">
// Head settings shared by every page.
useHead({
  // Each page sets its own `title`; this template appends the site name,
  // e.g. "Profile" becomes "Profile | Kael".
  titleTemplate: (title?: string) => (title ? `${title} | Kael` : 'Kael'),
  // lang helps screen readers; scheme-dark makes scrollbars/form controls dark.
  htmlAttrs: { lang: 'en', class: 'scheme-dark' },
  // Dark background on <body> so it never flashes white, even on overscroll.
  bodyAttrs: { class: 'bg-zinc-950 text-zinc-100 antialiased' },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
