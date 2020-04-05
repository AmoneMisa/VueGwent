import session from 'express-session'
import config from './config';
import mysqlStoreFactory from 'express-mysql-session';
const mysqlStore = mysqlStoreFactory(session);

let options = {
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
};

let sessionStore = new mysqlStore(options);

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gwent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['jquery'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/axios', {
      baseURL: config.url.server,
      browserBaseURL: config.url.client
    }]
  ],
  serverMiddleware: [
    session({
      secret: 'super-secret-key',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 24 * 60 * 60 * 1000 },
      store: sessionStore
    }),
    {path: '/api', handler: '~/api/index.js'}
  ],
  watch: ['~/api/index.js']
};

