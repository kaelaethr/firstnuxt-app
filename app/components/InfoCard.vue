<!--
  InfoCard: a titled box used for each section of the profile page.
  Whatever you put between <InfoCard> and </InfoCard> is placed in the <slot />.

  Usage:
    <InfoCard title="Education">
      ...content...
    </InfoCard>
-->
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
    <h2 class="mb-4 text-xs font-semibold tracking-widest text-violet-300 uppercase">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
