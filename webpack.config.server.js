const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name:"server",
  target:"node",
  entry:[path.join(CURRENT_WORKING_DIR, './backend/express.js')],
  output:{
    filename:'server.generated.js',
    path:path.join(CURRENT_WORKING_DIR,'/dist/'),
    publicPath:'/dist/',
    libraryTarget:'commonjs2'
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
  plugins:[],
  externals:[nodeExternals()]
}

module.exports = config
