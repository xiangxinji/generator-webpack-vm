const {merge} = require('webpack-merge')
const baseConf = require('./webpack.config.base')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const preset = require('../utils/preset')

const prodConf = {
  mode: 'production',
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
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}


module.exports = merge(baseConf, prodConf)
