const {
    outputDir, entry, template, sourceDir
} = require('../utils/path')
const preset = require('../utils/preset')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const DefinePlugin = webpack.DefinePlugin


const config = {
    stats: "minimal",
    entry,
    output: {
        path: outputDir,
        filename: 'js/[id].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: preset.remUnit,
                            remPrecision: preset.remPrecision
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm.js",
            "@": sourceDir
        },
        extensions: ['.js', '.vue', 'scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template, cache: false
        }),
        new WebpackBar(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[hash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public', to: './', noErrorOnMissing: true,
                },
                {
                    from: 'static', to: './', noErrorOnMissing: true,
                }
            ]
        }),
        new DefinePlugin({
            APP_VERSION : JSON.stringify(preset.version) ,
            'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

module.exports = config
