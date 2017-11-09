const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: {
    // vendor: ["react", "react-dom", "react-router-dom", "antd", "babel-polyfill"],
    app: ['babel-polyfill', 'react-hot-loader/patch', path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app/[name]_[hash:8].js',
    chunkFilename: 'app/chunks/[name].[chunkhash:5].chunk.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules'),
      'node_modules'
    ],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.less'],
    alias: {
      Axios: path.resolve(__dirname, '../src/containers/common/axios.js'),
    },
  },
  module: {
    loaders: [
      {
        loader: path.resolve(__dirname, '../node_modules/happypack/loader.js'),
      },
    ],
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=eslint',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=babel',
      },
      {
        test: /\.(tsx?$)/,
        use: [
          {
            loader: 'happypack/loader?id=ts',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'happypack/loader?id=css',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'eslint',
      threads: 1,
      loaders: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: path.resolve('.cache'),
          },
        },
        {
          path: 'eslint-loader',
          options: {
            emitError: true,
            failOnWarning: true,
            failOnError: true,
          },
        },
      ],
    }),
    new HappyPack({
      id: 'babel',
      threads: 3,
      loaders: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: path.resolve('.cache'),
          },
        },
        {
          path: 'babel-loader',
        },
      ],
    }),
    new HappyPack({
      id: 'ts',
      threads: 1,
      loaders: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: path.resolve('.cache'),
          },
        },
        {
          path: 'ts-loader',
        },
      ],
    }),
    new HappyPack({
      id: 'ts',
      threads: 1,
      loaders: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: path.resolve('.cache'),
          },
        },
        {
          path: 'ts-loader',
        },
      ],
    }),
    new HappyPack({
      id: 'css',
      threads: 1,
      loaders: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: path.resolve('.cache'),
          },
        },
        {
          path: 'style-loader',
        },
        {
          path: 'css-loader',
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      title: config.titlename,
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      favicon: path.resolve(__dirname, `../favicon.png`),
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
  ],
};
