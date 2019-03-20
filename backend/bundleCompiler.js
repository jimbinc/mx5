import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.client'
import config from './webConfig'

const compile = (app) => {
  if(config.env == 'development'){
    const compiler = webpack(webpackConfig)
    const middleware = webpackMiddleware(compiler, {
      publicPath:webpackConfig.output.publicPath
    })
    const hotMiddleware = webpackHotMiddleware(compiler)
    app.use(middleware)
    app.use(hotMiddleware)
  }
}

export default {
  compile
}
