
module.exports = {
  env: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  app: {
    debug: process.env.NODE_ENV === 'development',
    port: 8088,
    keys: ['keys-wxapp-admin', 'keykeys-wxapp-admin'],
    sessionKey: 'session-key',
    solt: 'abc'
  },
  redis: {
    host: '127.0.0.1',
    port: '6379'
  }
}
