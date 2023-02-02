// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Medica Pro Familia',
    },
  },
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    apiToken: process.env.API_TOKEN,
  },
  build: {
    transpile: ['primevue'],
  },
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
  },
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler';
      }
    },
  },
});
