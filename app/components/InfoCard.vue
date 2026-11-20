<!--
  InfoCard: a titled box used for each section of the profile page.
  Whatever you put between <InfoCard> and </InfoCard> is placed in the <slot />.
  The small rounded dash next to the title echoes the homepage pattern.

  Usage:
    <InfoCard title="Education" accent="sky">
      ...content...
    </InfoCard>
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    accent?: 'violet' | 'sky' | 'fuchsia'
  }>(),
  { accent: 'violet' },
)

// One complete class string per accent (Tailwind needs full class names).
const accents = {
  violet: { dash: 'bg-violet-400', text: 'text-violet-300' },
  sky: { dash: 'bg-sky-400', text: 'text-sky-300' },
  fuchsia: { dash: 'bg-fuchsia-400', text: 'text-fuchsia-300' },
}
</script>

<template>
  <section
    class="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700 sm:p-7"
  >
    <h2 class="mb-5 flex items-center gap-3">
      <span :class="[accents[accent].dash, 'h-1.5 w-6 -rotate-12 rounded-full']" aria-hidden="true" />
      <span :class="[accents[accent].text, 'font-display text-sm font-bold tracking-[0.16em] uppercase']">
        {{ title }}
      </span>
    </h2>
    <slot />
  </section>
</template>
