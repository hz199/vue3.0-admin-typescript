const Router = require('koa-router')
const path = require('path')
const ejs = require('ejs')
const api = require('./api')

const router = new Router()

const viewFilePath = path.resolve(__dirname, '../dist/index.html')

router.use('/api', api.routes())

router.get('/*', (ctx) => {
  const store = {
    user: {}
  }

  const data = {
    store
  }

  ejs.renderFile(viewFilePath, data, {}, (err, str) => {
    if (err) {
      ctx.throw(err)
      return
    }

    ctx.body = str
  })
})

module.exports = router
