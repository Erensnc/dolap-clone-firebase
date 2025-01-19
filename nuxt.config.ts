// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/custom.scss'],
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],

  plugins: [
    '~/plugins/firebase.ts'
  ],

  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },

  app: {
    head: {
      title: 'nuxt dolap',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'web projesi' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' }, // Favicon ayarı
      ],
    },
  },

  build: {
    transpile: ['quasar'] // Quasar modülünü derle
  },

  compatibilityDate: '2025-01-05',
});