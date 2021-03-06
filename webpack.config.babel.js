import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import webpack from 'webpack';

export default () => ({

  entry: {
    app: [
      // 'react-hot-loader/patch',
      './src/app/index',
    ],
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
        options: {
          babelrc: false, // Tells webpack not to use the .babelrc file.
          presets: [
            ['env', { targets: { browsers: ['Chrome >= 50', 'Firefox >= 46', 'Safari >= 10', 'Edge >= 14'] }, modules: false }],
            'stage-2',
            'react',
          ],
          plugins: [
            // 'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false, // Tells webpack not to use the .babelrc file.
              presets: [
                ['env', { targets: { browsers: ['Chrome >= 50', 'Firefox >= 46', 'Safari >= 10', 'Edge >= 14'] }, modules: false }],
                'stage-2',
                'react',
              ],
              plugins: [
                // 'react-hot-loader/babel',
              ],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css'],
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
    watchContentBase: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

});
