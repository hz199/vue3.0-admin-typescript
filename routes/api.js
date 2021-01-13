const Router = require('koa-router')
const authController = require('../controllers/auth')
const router = new Router()

// message
router.get('/auth/login', authController.login)

module.exports = router
