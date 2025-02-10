import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future:{
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/html-validator',
    '@nuxt/image',
    '@nuxt/icon',
  ],

  devtools: {
    enabled: true,

    vscode: {
      reuseExistingServer: true,
      port: 3080,
    },

    timeline: {
      enabled: true,
    },
  },

  eslint: {
    config: {
      autoInit: true,
    }
  },

  compatibilityDate: '2025-02-09',
})