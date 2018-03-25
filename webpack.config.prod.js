import path from 'path'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [ 
    new HtmlWebpackPlugin({
        template:'src/index.html',
        minify: {
          removeComments:true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes:true,
          keepClosingSlash:true,
          minifyJS:true,
          minifyCSS:true,
          minifyURLs:true
        },
        inject:true
    }),

    new UglifyJsPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_module/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
