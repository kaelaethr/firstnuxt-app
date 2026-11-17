<!--
  Homepage. File path app/pages/index.vue  ->  URL "/"
-->
<script setup lang="ts">
// Browser tab title: becomes "Home | Kael" (see titleTemplate in app.vue).
useHead({ title: 'Home' })
</script>

<template>
  <!-- Stacked on mobile, side by side (photo left, text right) from md: up -->
  <section class="flex flex-col items-center gap-10 text-center md:flex-row md:gap-14 md:text-left">
    <ProfileAvatar alt="Photo of Khaiel Aldren A. Nasani" size="lg" />

    <div class="max-w-xl">
      <!-- Nickname -->
      <p class="text-sm font-medium text-violet-300">Hi, I'm Kael 👋</p>

      <!-- Full name -->
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        Khaiel Aldren A. Nasani
      </h1>

      <!-- Short intro -->
      <p class="mt-4 text-lg text-zinc-300">
        IT student focused on
        <span class="text-zinc-100">Web Development</span> and
        <span class="text-zinc-100">Motion Design</span>.
      </p>

      <!-- Welcome message -->
      <p class="mt-4 leading-relaxed text-zinc-400">
        Welcome to my personal page! Here you can learn a little about who I am,
        where I study, the tools I work with, and what I enjoy doing outside of class.
      </p>

      <!-- Call to action: links to the profile page -->
      <div class="mt-8 flex justify-center md:justify-start">
        <NuxtLink
          to="/profile"
          class="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
        >
          View my profile <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
