const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {

  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
  },
  devServer: {
    // development server port 8000
    //port: 8000
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
