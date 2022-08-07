import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/global.css',
    },
    alias: {
        '@assets': './assets'
    }, 
    buildModules: [
        [
          '@pinia/nuxt',
          {
            autoImports: [
              ['defineStore', 'definePiniaStore'],
            ],
          },
        ],
      ],

})
