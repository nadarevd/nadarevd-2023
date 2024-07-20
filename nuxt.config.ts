// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    '@/assets/css/style.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules : [['@nuxtjs/google-fonts', {
    families: {
      'Noto+Sans+JP': true,
      'Inter': true,
      'Mona Sans': true,
      download: true,
      inject: true,
    },
  }], '@nuxt/image']
})