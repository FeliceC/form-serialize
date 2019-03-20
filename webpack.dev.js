const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = [
  merge(common.baseConfig, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map'
  })
];
