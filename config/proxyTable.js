let targetRoot = 'http://localhost'
let port = '8101'
module.exports = {
  '/devapi/**': {
    target: targetRoot + ':' + port,
    secure: false,
    changeOrigin:true,
    pathRewrite: {
      '^/devapi': '/'
      }
  },
  '/testapi/**': {
    target: targetRoot + ':' + port,
    secure: false,
    changeOrigin:true,
    pathRewrite: {
      '^/testapi': '/'
    }
  }
}