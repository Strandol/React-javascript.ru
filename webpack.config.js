const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devServer: {
      proxy: [{
          path: '/api/*',
          target: 'http://localhost:3001'
      }]
  },
  module: {
    rules: [
      { 
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader' 
      },
      {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}
