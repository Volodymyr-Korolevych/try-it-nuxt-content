export default {
  target: 'static',
  head: {
    title: 'tryIt Demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxt/content',
    'tryIt'
  ],
  tryIt: {
    button: {
      buttons: ['Виконати']
    },
    block: {
      buttons: ['Виконати', 'Відновити', 'ПовнийЕкран']
    },
    page: {
      buttons: ['Виконати', 'Значення', 'Повернутися'],
      name: 'code'
    }
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  build: {
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  }
}
