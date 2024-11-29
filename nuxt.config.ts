// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'test task',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            { hid: 'description', name: 'description', content: 'Test' },
        ],
        script: [
            {
                children: `window.process = window.process || { env: { NODE_DEBUG: undefined, DEBUG: undefined } }; window.global = window;`,
            },
        ],

        noscript: [{ children: 'Javascript is required' }],
    },
},

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@pinia/nuxt',[
    '@vee-validate/nuxt',
    {
      autoImports: true,
      componentNames: {
        Form: 'VForm',
        Field: 'VField',
        ErrorMessage: 'VErrorMessage',
      },
    },
  ],],
  compatibilityDate: '2024-11-28',
})