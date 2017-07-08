import gulp from 'gulp'
import browserSync from 'browser-sync'
import webpack from 'webpack'

import { main, client } from '../paths'
import webpackConfig from '../webpack/webpack.config.babel'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import historyFallback from 'connect-history-api-fallback'

export const bs = () => {
  return new Promise((resolve) => {
    let env = {
      target: process.env.NODE_ENV
    }

    let config = webpackConfig(env)

    config.entry.main = [ 'webpack-hot-middleware/client?reload=true' ].concat(main.input.path)

    const compiler = webpack(config)

    browserSync({
      port: client.server.port,
      open: false,
      serveStatic: ['./public'],
      middleware: [
        webpackDevMiddleware(compiler, {
          noInfo: true,
          stats: {
            colors: true
          },
          publicPath: config.output.publicPath
        }),
        webpackHotMiddleware(compiler),
        historyFallback()
      ]
    })

    resolve()
  })
}
