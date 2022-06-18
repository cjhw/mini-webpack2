const webpack = require('webpack')
const webpackOptions = require('./webpack.config')
const path = require('path')

const compiler = webpack(webpackOptions)

debugger
compiler.run((err, stats) => {
  console.log(err)
  console.log(
    stats.toJson({
      entries: true,
      chunks: true,
      modules: true,
      _modules: true,
      assets: true,
    })
  )
})
