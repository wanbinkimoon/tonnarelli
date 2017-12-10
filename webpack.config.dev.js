const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: 'src',
        filename: '[name].js'
    }

});