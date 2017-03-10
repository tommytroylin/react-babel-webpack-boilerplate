/**
 * Webpack2 default config for development
 *
 * Created by Tommy on 12/4/15.
 * Modified by Tommy on 3/10/17.
 */

import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'

export default () => ({

  entry: {
    app: [
      // 'react-hot-loader/patch',
      './src/app/index',
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          babelrc: false, // Tells webpack not to use the .babelrc file.
          presets: [
            ['env', { targets: { browsers: ['Chrome >= 50', 'Firefox >= 46', 'Safari >= 10', 'Edge >= 14'] }, modules: false, }],
            'stage-2',
            'react',
          ],
          plugins: [
            // 'react-hot-loader/babel',
          ],
        },
      },
    ],

  },

  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

  devtool: 'eval',

  context: __dirname,

  target: 'web',

  externals: [],

  stats: 'errors-only',

  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    publicPath: '/',
    compress: true,
    historyApiFallback: false,
    // hot: true,
    // hotOnly: true,
    https: false,
    noInfo: true,
    watchContentBase: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ],

});
