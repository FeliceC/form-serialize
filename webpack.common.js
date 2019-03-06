const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const configureCleanWebpack = () => ({
  root: path.join(__dirname, './'),
  verbose: true,
  dry: false,
  watch: false
});

// Configure Babel loader
const configureBabelLoader = () => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
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
      }
    ]
  };
};

const baseConfig = {
  name: pkg.name,
  entry: {
    formserialize: path.join(__dirname, 'index')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: `[name].js`
  },
  module: {
    rules: [configureBabelLoader()]
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: `${pkg.name} ${process.env.NODE_ENV}`,
      excludeWarnings: true,
      alwaysNotify: true
    })
  ]
};

module.exports = {
  baseConfig
};
