const path = require('path');

const {
  DefinePlugin
} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          //   {
          //     loader: 'postcss-loader',
          //     options: {
          //       postcssOptions: {
          //         plugins: [require('autoprefixer')],
          //       },
          //     },
          //   },
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'img/[name]-[hash:6].[ext]',
          },
        },
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {},
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'demo-webpack',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
    new CopyPlugin({
      patterns: [{
        from: './public',
        to: './',
        globOptions: {
          ignore: ['**/index.html'],
        },
      }, ],
    }),
    new CleanWebpackPlugin(),
  ],
};