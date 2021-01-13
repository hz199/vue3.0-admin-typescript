const Ajv = require('ajv').default
const logger = require('./logger')('validateSchema')

const ajv = new Ajv({
  allErrors: true
})

module.exports = function validator (schema, data) {
  const valid = ajv.validate(schema, data)

  if (!valid) {
    logger.warn(ajv.errorsText())
  }

  return valid
}
