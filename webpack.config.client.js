const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name:"browser",
  mode:"development",
  devtool:"eval-source-map",
  entry:['react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(CURRENT_WORKING_DIR, '/frontend/main.js')],
  output:{
    filename:'bundle.js',
    path:path.join(CURRENT_WORKING_DIR, '/dist/'),
    publicPath:'/dist/'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader'],
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader'],
      },
      {
        test:/\.(woff|woff2|ttf|svg)$/,
        use:'file-loader',
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
  }
}

module.exports = config
