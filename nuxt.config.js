module.exports = () => {

  const pkg = require('./package')

  return {
    mode: 'universal',
    env: {
      baseTitle: 'Tento - 集まろう！ 学生の新しいコミュニティー',
      baseDesc: 'Tentoとは学生のみが利用する学生求人サイトです。あなたの興味のあるこや、やりたいことをみんなでシェアして取り組める!イベント開催告知から開発メンバー募集までなんでもあり！',
      baseUrl: 'https://tento.app/',
      baseOgp: 'sns.png',
    },

    /*
     ** Headers of the page
     */
    head: {
      title: 'Tento',
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
          content: this.baseDesc
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.baseTitle
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.baseUrl
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.baseTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.baseDesc
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.baseOgp
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
    modules: [,
      '@nuxtjs/apollo',
      'cookie-universal-nuxt',
      'nuxt-dayjs-module',
      '@nuxtjs/google-analytics', {
        id: 'UA-129505564-2'
      }
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
