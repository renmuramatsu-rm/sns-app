// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  plugins: ['~/plugins/vee-validate.ts'],
  auth: {
    origin: 'http://localhost:3000',
    basePath: '/api/auth',
    globalAppMiddleware: true,
    provider: {
      type: 'authjs'
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@sidebase/nuxt-auth',
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.LARAVEL_API_BASE || 'http://localhost:8000/api'
    }
  },

})