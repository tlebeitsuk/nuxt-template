import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  modules: [
    'nuxt-security',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
  ],
  typescript: {
    strict: true,
    shim: false, // Disable generating shim when "Volar: Take Over Mode" is enabled
  },
  experimental: {
    reactivityTransform: true, // https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables
  },
  imports: {
    dirs: ['stores'], // Auto import Pinia stores
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  security: {
    enabled: process.env.NODE_ENV === 'production', // Enable Nuxt Security only in production
  },
  unocss: {
    preflight: true, // Enable preflights
  },
})
