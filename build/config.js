const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  appBase: appDirectory,
  appBuild: resolveApp('dist'),
  appComponents: resolveApp('src/components'),
  appEnv: process.env.NODE_ENV,
  appIndexJs: resolveApp('src/index.js'),
  appNodeModules: resolveApp('node_modules'),
  appDevSourceMap: true,
  appProdSourceMap: false,
  appSrc: resolveApp('src'),
  appStats: {
    stats: {
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      modules: false,
    },
  },
  appTemplateMeta: {
    description:
      'A React/Redux app that retrieves the current weather using the DarkSky API.',
    template: resolveApp('public/index.html'),
    title: 'Weather',
  },
}
