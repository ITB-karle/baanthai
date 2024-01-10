// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-gtag',
    'nuxt3-meta-pixel',
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  css: ['@/styles/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [
    { src: '~/plugins/fontawesome', ssr: false },
  ],
  ssr: false,

  gtag: {
    property: {
      id: 'G-VC837F6PL5', // Replace with your actual Google Analytics Measurement ID
    },
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '601615171278946',
    autoPageView: true,
    disabled: false
  },

  // Router configuration for setting base URL
  router: {
    base: '/' // Replace with your actual base URL if applicable
  }
})

