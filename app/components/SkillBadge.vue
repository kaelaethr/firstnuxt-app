<!--
  SkillBadge: a small rounded "chip" for one skill or hobby.
  The `variant` prop picks a color so different categories look different.

  Usage: <SkillBadge label="Nuxt" variant="dev" />
-->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    variant?: 'dev' | 'creative' | 'neutral'
  }>(),
  { variant: 'neutral' },
)

// One complete class string per variant (Tailwind needs full class names).
const variantClasses = {
  dev: 'border-sky-400/25 bg-sky-400/10 text-sky-200',
  creative: 'border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200',
  neutral: 'border-zinc-700 bg-zinc-800/60 text-zinc-200',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
      variantClasses[props.variant],
    ]"
  >
    {{ label }}
  </span>
</template>
