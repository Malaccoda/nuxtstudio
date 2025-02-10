import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future:{
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
  ],

  devtools: {
    enabled: true,
    vscode: {
      reuseExistingServer: true,
      port: 3080,
    },
  },

  eslint: {
    config: {
      autoInit: true,
    }
  },

  compatibilityDate: '2025-02-09',
})