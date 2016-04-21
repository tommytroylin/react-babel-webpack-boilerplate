/**
 * Webpack default config for distribution
 *
 * Created by Tommy on 12/4/15.
 */

var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { app: [path.resolve(__dirname, 'src/app/index.jsx')] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff', name: 'assets/other/[hash].[ext]' },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/octet-stream', name: 'assets/other/[hash].[ext]' },
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file', query: { name: 'assets/other/[hash].[ext]' } },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'image/svg+xml', name: 'assets/other/[hash].[ext]' },
      },
      {
        test: /\.png$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'image/png', name: 'assets/img/[hash].[ext]' },
      },
      {
        test: /\.jpg$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'image/jpeg', name: 'assets/img/[hash].[ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('assets/css/[name].css'),
    new CopyWebpackPlugin([{ from: 'src/static/index.html' }]),
  ],
};