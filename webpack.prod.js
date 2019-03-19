const merge = require('webpack-merge');

const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');


// Configure optimization
const configureOptimization = () => ({
  minimizer: [new TerserPlugin()]
});

module.exports = merge(common.baseConfig, {
  mode: 'production',
  watch: false,
  optimization: configureOptimization()
});
