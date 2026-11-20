<!--
  Homepage. File path app/pages/index.vue  ->  URL "/"

  Layout (large screens):
    ┌──────────────────────────┬───────────────┐
    │ tagline                  │  ░ pattern ░  │
    │ Hello, I'm Kael!   ┌─────┼──────┐  ░    │
    │ intro text         │   photo    │  ░    │
    │ [View Profile →]   └─────┼──────┘  ░    │
    └──────────────────────────┴───────────────┘
  On small screens everything stacks: text first, then the photo.
-->
<script setup lang="ts">
// Browser tab title: becomes "Home | Kael" (see titleTemplate in app.vue).
useHead({ title: 'Home' })

const roles = ['IT Student', 'Web Developer', 'Motion Designer']
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Patterned panel on the right edge (large screens only).
         It runs to the top of the page, behind the nav. -->
    <div class="absolute inset-y-0 right-0 hidden w-[38%] lg:block">
      <DashPattern />
    </div>

    <div
      class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 pt-32 pb-20 sm:px-6 lg:min-h-[min(100svh,860px)] lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-28"
    >
      <!-- Left: text -->
      <div class="max-w-lg">
        <!-- Tagline: "IT STUDENT | WEB DEVELOPER | MOTION DESIGNER" -->
        <p class="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-sm font-semibold tracking-[0.18em] text-violet-300 uppercase">
          <template v-for="(role, i) in roles" :key="role">
            <span v-if="i > 0" class="text-zinc-600" aria-hidden="true">|</span>
            <span class="whitespace-nowrap">{{ role }}</span>
          </template>
        </p>

        <h1 class="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          Hello, I'm Kael!
        </h1>

        <p class="mt-7 text-[0.95rem] leading-7 text-pretty text-zinc-300 sm:text-justify sm:hyphens-auto">
          Welcome to my little corner of the web! I'm
          <span class="font-medium text-zinc-100">Khaiel Aldren A. Nasani</span>, a 3rd-year
          BS Information Technology student at Caraga State University. I build
          fast, clean websites with Nuxt and TypeScript, and I bring ideas to life
          through motion design with After Effects and DaVinci Resolve.
        </p>

        <p class="mt-4 text-[0.95rem] text-zinc-300">
          Explore my profile and get to know me!
        </p>

        <NuxtLink
          to="/profile"
          class="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-colors hover:bg-violet-400"
        >
          Check Profile
          <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">&rarr;</span>
        </NuxtLink>
      </div>

      <!-- Right: photo overlapping the edge of the pattern panel -->
      <div class="relative mx-auto w-[78%] max-w-sm lg:mx-0 lg:w-full lg:max-w-[400px]">
        <!-- Mobile/tablet: a pattern block peeking out behind the photo -->
        <div class="absolute -top-6 -right-8 -bottom-6 left-10 lg:hidden">
          <DashPattern />
        </div>

        <ProfileAvatar
          alt="Photo of Khaiel Aldren A. Nasani"
          shape="portrait"
          class="relative"
        />
      </div>
    </div>
  </section>
</template>
