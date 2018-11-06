const path = require('path')
const webpack = require('webpack')
const WebpackHtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './index.ts'),

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
        ]
    },
    mode: "development",
    devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: path.resolve(__dirname, './index.html'),
            inject: true,
        })
    ],
};
