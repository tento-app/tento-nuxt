module.exports = () => {

  const pkg = require('./package')
  const baseTitle = 'Tento - 集まろう！ 学生の新しいコミュニティー'
  const baseDesc = 'Tentoとは学生のみが利用する学生求人サイトです。あなたの興味のあるこや、やりたいことをみんなでシェアして取り組める!イベント開催告知から開発メンバー募集までなんでもあり！'
  const baseUrl = 'https://tento.app'
  const baseOgp = 'https://tento.app/sns.png'

  return {
    mode: 'universal',
    env: {
      baseAPIurl: process.env.TENTO_API_URL || 'http://localhost:8000',
      baseTitle: baseTitle,
      baseDesc: baseDesc,
      baseUrl: baseUrl,
      baseOgp: baseOgp,
    },

    /*
     ** Headers of the page
     */
    head: {
      title: baseTitle,
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: baseDesc
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: baseTitle
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: baseUrl
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: baseTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: baseDesc
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: baseOgp
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@tento_app'
        }
      ],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
      color: '#fff'
    },

    /*
     ** Global CSS
     */
    css: [
      'swiper/dist/css/swiper.css',
      'medium-editor/dist/css/medium-editor.css',
      'vue2-content-editor/src/themes/default.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
        src: '~/plugins/swiper.js',
        ssr: false
      },
      {
        src: '~/plugins/medium-editor',
        ssr: false
      },
      {
        src: '~/plugins/multiselect',
        ssr: false
      },
      {
        src: '~/plugins/datetime',
        ssr: false
      },
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
      '@nuxtjs/apollo',
      'cookie-universal-nuxt',
      'nuxt-dayjs-module',
      ['@nuxtjs/google-analytics', {
        id: 'paste your id here'
      }]
    ],

    apollo: {
      includeNodeModules: true,
      clientConfigs: {
        default: '~/plugins/apollo'
      }
    },
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      filenames: {
        app: '[name].js',
        chunk: '[name].js'
      },
      extend(config, ctx) {

      }
    }
  }
}
