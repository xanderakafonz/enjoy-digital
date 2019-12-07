const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/enjoy-back-to-basics/'
    : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/main.scss')]
    }
  }
}