const webpack = require('webpack')
module.exports = {
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
  baseUrl: process.env.NODE_ENV === 'production' ? '/qbwy/' : '/',
  outputDir: 'dms',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  devServer: {
    port: 4200, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    proxy: process.env.PROXY_PATH
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BUILDTIME': new Date().getTime()
      })
    ]
  }
}
