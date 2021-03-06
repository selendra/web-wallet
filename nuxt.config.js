export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'SELENDRA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'The Platform for the Issuance and Management of Digital Asset' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/chart', ssr: false },
    { src: '~/plugins/vue-qr', ssr: false },
    { src: '~/plugins/vue-qr-reader', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: 'fa'
    },
    theme: {
      dark: true,
    }
  },
  toast: {
    position: 'top-center',
    theme: "bubble", 
    duration: '3000',
    register: [ 
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  axios: {
    baseURL: 'https://testnet-api.zeetomic.com/pub/v1'
  },
  /** 
  ** PWA Config
  */
  icon: {
    iconSrc: './assets/z-logo_copy.png',
  },
  manifest: {
    short_name: 'SELENDRA Wallet',
    name: 'SELENDRA Wallet',
    start_url: '/',
    theme_color: '#222834',
  },
}
