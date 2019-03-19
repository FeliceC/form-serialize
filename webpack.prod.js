const merge = require('webpack-merge');

const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

// Configure terser
const configureTerser = () => ({
  cache: true,
  parallel: true,
  sourceMap: true
});

// Configure optimization
const configureOptimization = () => ({
  minimizer: [new TerserPlugin(configureTerser())]
});

module.exports = [
  merge(common.baseConfig, {
    mode: 'production',
    watch: false,
    devtool: 'source-map',
    optimization: configureOptimization()
  })
];
