// https://nuxt.com/docs/api/configuration/nuxt-config
// Tailwind CSS v4 ships its own Vite plugin, so we register it directly with
// Nuxt's underlying Vite build instead of using a Nuxt module.
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Global stylesheet loaded on every page. "~" points to the app/ directory.
  css: ['~/assets/css/main.css'],

  vite: {
    // tailwindcss() must be CALLED – it returns the actual plugin object.
    plugins: [tailwindcss()],
  },
})
