const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react-app'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Chat Client with Websockets',
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}