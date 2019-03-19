const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const pkg = require('./package.json');


// Configure Babel loader
const configureBabelLoader = () => ({
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'entry',
            targets: {
              browsers: Object.values(pkg.browserslist)
            }
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true
          }
        ]
      ]
    }
  }]
});

const baseConfig = {
  name: pkg.name,
  entry: {
    formserialize: path.join(__dirname, 'index')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [configureBabelLoader()]
  }
};

module.exports = {
  baseConfig
};
