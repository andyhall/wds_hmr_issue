
var webpack = require('webpack')


module.exports = {
    devServer: {
        hot: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    mode: 'development',
    entry: ['./index.js'],
    output: { filename: 'bundle.js' },
}

