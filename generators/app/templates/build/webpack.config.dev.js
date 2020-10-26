const {merge} = require('webpack-merge')
const baseConf = require('./webpack.config.base');
const preset = require('../utils/preset')

const config = {
  mode: 'development',
  devServer: {
    host: preset.devServerHost,
    port: preset.devServerPort,
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: preset.imageToBase64Limit,
              esModule: false,
              name: "img/[hash].[ext]",
              publicPath: '/',
            },
          },
        ],
      },
    ]
  }
}

module.exports = merge(baseConf, config)
