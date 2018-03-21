import path from 'path'
import webpack from 'webpack'

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [ ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_module/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
