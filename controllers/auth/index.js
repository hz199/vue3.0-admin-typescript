const _ = require('lodash')
const validator = require('../../lib/validateSchema')

/**
 * 登录
 * @param
 */
exports.login = async function login (ctx) {
  const body = _.pick(ctx.request.body, ['userName', 'passWord'])

  const valid = validator({
    required: [ 'userName', 'passWord' ],
    properties: {
      userName: {
        type: 'string',
        minLength: 1
      },
      passWord: {
        type: 'string',
        minLength: 1
      }
    }
  }, body)

  if (!valid) {
    ctx.throw(400, '存在非法的请求参数')
    return
  }


  ctx.body = {
    code: 200
  }
}

/**
 * 登出
 * @param
 */
exports.logout = async function logout (ctx) {
  
  ctx.body = {
    code: 200
  }
}

