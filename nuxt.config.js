import session from 'express-session'
import dbConfig from './db.config';
import mysqlStoreFactory from 'express-mysql-session';
const mysqlStore = mysqlStoreFactory(session);

let options = {
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
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
      baseURL: 'http://localhost:3000/',
      browserBaseURL: '/'
    }]
  ],
  serverMiddleware: [
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 },
      store: sessionStore
    }),
    {path: '/api', handler: '~/api/index.js'}
  ],
  watch: ['~/api/index.js']
};

