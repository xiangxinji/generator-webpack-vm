const {merge} = require('webpack-merge')
const baseConf = require('./webpack.config.base');
const preset = require('../utils/preset')

const config = {
    mode: 'development',
    devServer: {
        host: preset.devServerHost,
        port: preset.devServerPort,
        inline : true ,
        hot : true,
    },
}

module.exports = merge(baseConf, config)
