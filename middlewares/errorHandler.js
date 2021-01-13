const http = require('http')
const logger = require('../lib/logger')('errorHandler')

module.exports = async function errorHandle (ctx, next) {
  try {
    await next()
  } catch (err) {
    const status = err.status || 500
    const message = err.message || http.STATUS_CODES[status]

    ctx.status = status
    ctx.body = { message }

    if (status >= 500) {
      logger.error(err.status, err.message)
      ctx.app.emit('error', err, ctx)
    } else {
      logger.warn(err.status, err.message)
    }
  }
}
