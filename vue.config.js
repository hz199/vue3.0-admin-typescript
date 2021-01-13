const path = require('path')

module.exports = {
  assetsDir: 'assets',
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: `http://127.0.0.1:8788`,
        changeOrigin: true
      }
    }
  },
  // 这个参数回影响代理
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 修改上下文作用域
  chainWebpack: (config) => {
    config
      .resolve.alias
      .set('@', path.resolve(__dirname, './src'))

    // config
    //   .entry('main')
    //   .add(path.resolve(__dirname, './src/main.ts'))
    //   .end()

  },
  // 代码gzip压缩
  configureWebpack: () => {
  }
}