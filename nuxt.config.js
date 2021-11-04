export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zapolskiy.moscow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    {
      src: "assets/js/modernizr.custom.min.js"
    },
    {
      src: "assets/js/jquery-1.11.1.min.js",
      body: true
    },
    {
      src: "assets/bootstrap/js/bootstrap.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/jquery.parallax-1.1.3.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/imagesloaded.pkgd.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/jquery.sticky.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/smoothscroll.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/wow.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/jquery.easypiechart.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/waypoints.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/jquery.cbpQTRotator.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/custom.min.js",
      body: true,
      async: true,
      defer: true
    },
    {
      src: "assets/js/fade.js",
      body: true,
      async: true,
      defer: true
    }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap/css/bootstrap.min.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/simple-line-icons.min.css',
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 4000 // default: 3000
  }
}
