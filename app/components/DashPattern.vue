<!--
  DashPattern: a decorative block filled with scattered "brush stroke" dashes.
  It stretches to fill whatever box it is placed in (absolute inset-0).

  The SVG <pattern> draws one 160x160 tile of dashes and repeats it.
  useId() gives each instance a unique pattern id, so several patterns on
  one page don't clash (and the id matches between server and browser).

  Usage: <DashPattern class="rounded-3xl" />
-->
<script setup lang="ts">
const patternId = `dash-${useId()}`

// Each dash: start point, angle (deg) and length. Hand-picked so the
// tile looks random but still repeats seamlessly.
const dashes = [
  { x: 12, y: 18, a: 70, l: 24 }, { x: 52, y: 8, a: 110, l: 20 },
  { x: 96, y: 22, a: 40, l: 26 }, { x: 136, y: 10, a: 95, l: 22 },
  { x: 28, y: 62, a: 130, l: 22 }, { x: 72, y: 52, a: 80, l: 28 },
  { x: 116, y: 64, a: 20, l: 20 }, { x: 148, y: 56, a: 120, l: 24 },
  { x: 8, y: 104, a: 35, l: 22 }, { x: 48, y: 98, a: 100, l: 26 },
  { x: 90, y: 110, a: 60, l: 20 }, { x: 132, y: 100, a: 140, l: 26 },
  { x: 24, y: 144, a: 85, l: 22 }, { x: 70, y: 140, a: 25, l: 24 },
  { x: 110, y: 150, a: 115, l: 20 }, { x: 150, y: 138, a: 65, l: 22 },
].map(({ x, y, a, l }) => {
  const r = (a * Math.PI) / 180
  return { x1: x, y1: y, x2: +(x + Math.cos(r) * l).toFixed(1), y2: +(y + Math.sin(r) * l).toFixed(1) }
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden bg-violet-400" aria-hidden="true">
    <svg class="size-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern :id="patternId" width="160" height="160" patternUnits="userSpaceOnUse">
          <line
            v-for="(d, i) in dashes"
            :key="i"
            v-bind="d"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
            class="text-violet-950/70"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${patternId})`" />
    </svg>
  </div>
</template>
