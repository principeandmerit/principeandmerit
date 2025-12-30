// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['modern-normalize/modern-normalize.css', '~/assets/styles/app.scss'],
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    provider: 'google',
  },
})
