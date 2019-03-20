const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  mode:"production",
  entry:[path.join(CURRENT_WORKING_DIR, '/frontend/main.js')],
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
  ],

  resolve: {
      alias: {
      }
  }
}

module.exports = config
