const common = require('./webpack.common.js');

const merge = require('webpack-merge');

module.exports = [
  merge(common.baseConfig, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map'
  })
];
