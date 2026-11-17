<!--
  ProfileAvatar: circular profile photo.
  If /avatar.jpg is missing or fails to load, it shows initials instead
  of a broken-image icon (graceful degradation).

  Usage: <ProfileAvatar alt="..." size="lg" />
-->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    alt: string              // description of the photo (accessibility)
    src?: string             // image path inside public/
    initials?: string        // shown when the image can't load
    size?: 'sm' | 'lg'       // two preset sizes
  }>(),
  { src: '/avatar.jpg', initials: 'KN', size: 'lg' },
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

// Size presets (size-* sets both width and height).
const sizeClass = computed(() =>
  props.size === 'lg' ? 'size-40 text-4xl sm:size-48' : 'size-20 text-xl',
)
</script>

<template>
  <div
    :class="[
      sizeClass,
      'relative shrink-0 overflow-hidden rounded-full bg-zinc-800',
      'ring-2 ring-violet-400/40 ring-offset-4 ring-offset-zinc-950',
    ]"
  >
    <!-- object-cover fills the circle; object-[50%_20%] keeps the face in frame -->
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
