<!--
  Profile page. File path app/pages/profile.vue  ->  URL "/profile"
-->
<script setup lang="ts">
// Browser tab title: becomes "Profile | Kael".
useHead({ title: 'Profile' })

// --- Page data -------------------------------------------------------------
// Keeping the content in arrays means the template just loops over it,
// so adding a skill is a one-line change.

const personalInfo = [
  { label: 'Full name', value: 'Khaiel Aldren A. Nasani' },
  { label: 'Nickname', value: 'Kael (kaelo)' },
  { label: 'Focus', value: 'Web Development & Motion Design' },
]

const education = {
  school: 'Caraga State University',
  program: 'BS Information Technology',
  year: '3rd Year',
}

const skillGroups = [
  {
    name: 'Development',
    variant: 'dev' as const,
    skills: [
      'Node.js', 'NestJS', 'Nuxt', 'TypeScript', 'PostgreSQL', 'APIs',
      'HTML', 'CSS', 'JavaScript', 'C', 'Python', 'Java',
    ],
  },
  {
    name: 'Creative',
    variant: 'creative' as const,
    skills: ['After Effects', 'DaVinci Resolve', 'Canva', 'Photoshop'],
  },
]

const hobbies = [
  'Editing', 'Combat Sports', 'Video Games', 'Web Development', 'Game Development',
]

// Quick facts shown under the intro.
const facts = [education.program, education.school, education.year]
</script>

<template>
  <div class="mx-auto max-w-6xl space-y-12 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
    <!-- Header: intro text on the left, photo "sticker" on the right -->
    <header class="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
      <div class="max-w-xl text-center md:text-left">
        <p class="font-display text-sm font-semibold tracking-[0.18em] text-violet-300 uppercase">
          About me
        </p>
        <h1 class="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          My Profile
        </h1>
        <p class="mt-5 leading-7 text-pretty text-zinc-300">
          I'm <span class="font-medium text-zinc-100">Kael</span> — an IT student who
          loves building for the web and telling stories through motion. Here's a
          closer look at where I study, the tools I use, and what I do for fun.
        </p>

        <ul class="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
          <li
            v-for="fact in facts"
            :key="fact"
            class="rounded-full border border-zinc-700/80 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
          >
            {{ fact }}
          </li>
        </ul>
      </div>

      <!-- Circle photo with a patterned circle offset behind it -->
      <div class="relative shrink-0">
        <div class="absolute inset-0 translate-x-4 translate-y-4 overflow-hidden rounded-full">
          <DashPattern />
        </div>
        <ProfileAvatar alt="Photo of Khaiel Aldren A. Nasani" size="lg" class="relative" />
      </div>
    </header>

    <!-- Two columns on medium screens and up, one column on mobile -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Personal information -->
      <InfoCard title="Personal Information">
        <dl class="divide-y divide-zinc-800">
          <div
            v-for="item in personalInfo"
            :key="item.label"
            class="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-4"
          >
            <dt class="text-sm text-zinc-500">{{ item.label }}</dt>
            <dd class="font-medium text-zinc-100 sm:text-right">{{ item.value }}</dd>
          </div>
        </dl>
      </InfoCard>

      <!-- Educational background -->
      <InfoCard title="Educational Background" accent="sky">
        <div class="border-l-2 border-sky-400/40 pl-4">
          <p class="font-display text-lg font-semibold text-zinc-100">{{ education.school }}</p>
          <p class="mt-1 text-zinc-300">{{ education.program }}</p>
          <p class="mt-3 inline-block rounded-full bg-sky-400/10 px-3 py-0.5 text-sm font-medium text-sky-200">
            {{ education.year }} &middot; Currently enrolled
          </p>
        </div>
      </InfoCard>

      <!-- Skills: spans both columns; categories side by side on wide screens -->
      <InfoCard title="Skills" accent="fuchsia" class="md:col-span-2">
        <div class="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div v-for="group in skillGroups" :key="group.name">
            <h3 class="mb-3 flex items-baseline gap-2 text-sm font-medium text-zinc-400">
              {{ group.name }}
              <span class="text-xs text-zinc-600">{{ group.skills.length }}</span>
            </h3>
            <div class="flex flex-wrap gap-2">
              <SkillBadge
                v-for="skill in group.skills"
                :key="skill"
                :label="skill"
                :variant="group.variant"
              />
            </div>
          </div>
        </div>
      </InfoCard>

      <!-- Hobbies: reuses SkillBadge with the neutral color -->
      <InfoCard title="Hobbies" class="md:col-span-2">
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="hobby in hobbies" :key="hobby" :label="hobby" />
        </div>
      </InfoCard>
    </div>

    <!-- Back to home -->
    <div class="text-center">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-300"
      >
        <span aria-hidden="true">&larr;</span> Back to home
      </NuxtLink>
    </div>
  </div>
</template>
