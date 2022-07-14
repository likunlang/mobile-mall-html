export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'y',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'baidu-site-verification', content: 'code-76zXAbBJH8' },
      { name: 'viewport', content: 'initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no' },
      { name: 'referrer', content: 'no-referrer' },
      { hid: 'keywords', name: 'description', content: 'keywords' },
      { hid: 'description', name: 'description', content: 'description' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    '~/plugins/request.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    //baseURL:"api.dangyunlong.com", //设置统一的基础url，线上环境关闭代理时使用它。
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000/', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      },
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build  加上axios，防止axios二次打包
  build: {
    vendor: ['axios'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },
}
