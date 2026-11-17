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
</script>

<template>
  <div class="space-y-10">
    <!-- Page header: small avatar + name -->
    <header class="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
      <ProfileAvatar alt="Photo of Khaiel Aldren A. Nasani" size="sm" />
      <div>
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">My Profile</h1>
        <p class="mt-1 text-zinc-400">Khaiel Aldren A. Nasani &middot; goes by Kael</p>
      </div>
    </header>

    <!-- Two columns on medium screens and up, one column on mobile -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Personal information -->
      <InfoCard title="Personal Information">
        <dl class="space-y-3">
          <div v-for="item in personalInfo" :key="item.label">
            <dt class="text-sm text-zinc-500">{{ item.label }}</dt>
            <dd class="font-medium text-zinc-100">{{ item.value }}</dd>
          </div>
        </dl>
      </InfoCard>

      <!-- Educational background -->
      <InfoCard title="Educational Background">
        <p class="font-medium text-zinc-100">{{ education.school }}</p>
        <p class="mt-1 text-zinc-300">{{ education.program }}</p>
        <p class="mt-3 inline-block rounded-md bg-zinc-800 px-2 py-0.5 text-sm text-zinc-300">
          {{ education.year }}
        </p>
      </InfoCard>

      <!-- Skills: spans both columns, one row of badges per category -->
      <InfoCard title="Skills" class="md:col-span-2">
        <div class="space-y-5">
          <div v-for="group in skillGroups" :key="group.name">
            <h3 class="mb-2 text-sm font-medium text-zinc-400">{{ group.name }}</h3>
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
  </div>
</template>
