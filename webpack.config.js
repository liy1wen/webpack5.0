const path = require('path');

const {
  DefinePlugin,
  BannerPlugin
} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader/dist/index')
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
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
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
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: 'img/[name]-[hash:6].[ext]'
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  plugins: [
    // 创建打包后的入口html文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'demo-webpack',
    }),
    // 申明全局变量
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
    // 复制已有文件到新的目录下
    new CopyPlugin({
      patterns: [{
        from: './public',
        to: './',
        globOptions: {
          ignore: ['**/index.html'],
        },
      }, ],
    }),
    // 打包自动删除旧的包文件
    new CleanWebpackPlugin(),
    // 提取css到单独文件
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:6].css'
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin(),
    // 生成的块的顶部添加一个横幅
    new BannerPlugin({
      banner: 'leeyiwen',
    }),
    // eslint规范
    new ESLintPlugin({
      fix: true, //自动解决常规代码格式报错
      extensions: ['js', 'json', 'coffee'],
      exclude: '/node_modules/'
    }),
    new VueLoaderPlugin()
  ],
};