const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackProConfig = require('./webpack.pro.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.file');

process.env.NODE_ENV = 'production';
process.env.API_HOST = 'http://localhost:8080';

module.exports = merge(webpackProConfig, {
  entry: [
    'babel-polyfill',
    "./src/index.prod"
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   output: {
    //     comments: false,  // remove all comments
    //   },
    //   compress: {
    //     warnings: true,
    //   }
    // }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['module', 'exports', 'require']
      },
      sourceMap: true,
      parallel: {
        cache: true,
        workers: 2
      },
      output: {
        comments: false,
        beautify: false,
      },
      compress: {
        warnings: true,
      }
    }),
    // Transfer Files
    /*new CopyWebpackPlugin([
      {from: 'src/www/css', to: 'css'},
      {from: 'src/www/images', to: 'images'}
    ]),*/
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.AUTH_HOST': JSON.stringify(`${process.env.API_HOST}/oauth`),
      'process.env.CLIENT_ID': JSON.stringify(`${config.proclientId}`),
      'process.env.API_HOST': JSON.stringify(process.env.API_HOST)
    }),
  ],
});
