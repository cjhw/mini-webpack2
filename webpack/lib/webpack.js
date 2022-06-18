const Compiler = require('./Compiler')
const NodeEnvironmentPlugin = require('./node/NodeEnvironmentPlugin')
const WebpackOptionsApply = require('./WebpackOptionsApply')

const webpack = (options) => {
  let compiler = new Compiler(options.context)
  compiler.options = options
  new NodeEnvironmentPlugin().apply(compiler) // 让compiler可以读写文件
  // 挂载配置文件的插件
  if (options.plugins && Array.isArray(options.plugins)) {
    for (let plugin of options.plugins) {
      plugin.apply(compiler)
    }
  }
  //初始化选项,挂载内置插件
  new WebpackOptionsApply().process(options, compiler)
  return compiler
}

exports = module.exports = webpack
