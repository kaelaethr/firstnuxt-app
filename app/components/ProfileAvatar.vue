<!--
  ProfileAvatar: profile photo, either a circle or a tall "portrait" card.
  If /avatar.jpg is missing or fails to load, it shows initials instead
  of a broken-image icon (graceful degradation).

  Usage:
    <ProfileAvatar alt="..." size="lg" />          circle
    <ProfileAvatar alt="..." shape="portrait" />   fills its container's width
-->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    alt: string                    // description of the photo (accessibility)
    src?: string                   // image path inside public/
    initials?: string              // shown when the image can't load
    size?: 'sm' | 'lg'             // circle size presets (ignored for portrait)
    shape?: 'circle' | 'portrait'
  }>(),
  { src: '/avatar.jpg', initials: 'KN', size: 'lg', shape: 'circle' },
)

// true once we know the image failed to load
const failed = ref(false)
const imgEl = ref<HTMLImageElement | null>(null)

// The page is rendered on the server first, so the image might fail BEFORE
// Vue attaches the @error listener in the browser. This check catches that case:
// a "complete" image with zero width means it failed.
onMounted(() => {
  if (imgEl.value?.complete && imgEl.value.naturalWidth === 0) {
    failed.value = true
  }
})

// One full class string per look (Tailwind needs complete class names).
const frameClass = computed(() => {
  if (props.shape === 'portrait') {
    return 'aspect-[4/5] w-full text-6xl shadow-2xl shadow-black/60'
  }
  const size = props.size === 'lg' ? 'size-40 text-4xl sm:size-48' : 'size-20 text-xl'
  return `${size} rounded-full ring-2 ring-violet-400/40 ring-offset-4 ring-offset-zinc-950`
})
</script>

<template>
  <div :class="[frameClass, 'relative shrink-0 overflow-hidden bg-zinc-800']">
    <!-- object-cover fills the frame; object-[50%_20%] keeps the face in view -->
    <img
      v-if="!failed"
      ref="imgEl"
      :src="src"
      :alt="alt"
      class="size-full object-cover object-[50%_20%]"
      @error="failed = true"
    >

    <!-- Fallback when there is no photo -->
    <span
      v-else
      role="img"
      :aria-label="alt"
      class="flex size-full items-center justify-center bg-gradient-to-br from-violet-500/30 to-zinc-800 font-semibold text-violet-200"
    >
      {{ initials }}
    </span>
  </div>
</template>
