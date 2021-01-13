const pino = require('pino')
const config = require('config')

module.exports = function logger (name = 'default') {
  const pretty = pino.pretty()

  pretty.pipe(process.stdout)

  const logger = pino({ name }, pretty)
  const env = config.get('env')

  if (env === 'testing') {
    logger.level = 'silent'
  } else if (env === 'production') {
    logger.level = 'warn'
  } else {
    logger.level = config.get('app.debug') ? 'trace' : 'info'
  }

  return logger
}
