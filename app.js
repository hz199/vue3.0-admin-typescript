const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
// const staticService = require('koa-static')
const config = require('config')
const staticServiceCache = require('koa-static-cache')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = new Koa()

const env = config.get('env')

if (env === 'development' && config.get('app.debug')) {
  app.use(logger())
}

app.use(staticServiceCache(path.join(__dirname, './dist'), {
  maxAge: 7 * 24 * 60 * 60
}))

// app.use(staticService(path.resolve(__dirname, './dist')))

app.use(json())

app.use(bodyParser({
  enableTypes: ['json', 'form']
}))

app.keys = config.get('app.keys')

const sessionConfig = {
  key: config.get('app.sessionKey'),
  maxAge: 1000 * 60 * 60 * 24 * 2,
  // maxAge: 5000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}

app.use(session(sessionConfig, app))

app.use(errorHandler)

// 路由
app.use(router.routes())

if (env === 'development' && config.get('app.debug')) {
  app.on('error', (err, ctx) => {
    console.error('Server error: ', err, ctx)
  })
}

module.exports = app
