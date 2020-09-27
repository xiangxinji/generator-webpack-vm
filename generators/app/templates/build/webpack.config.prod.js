const {merge} = require('webpack-merge')
const baseConf = require('./webpack.config.base')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const prodConf = {
    mode: 'production',
    module:{
        rules:[
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
    ]
}


module.exports = merge(baseConf, prodConf)
