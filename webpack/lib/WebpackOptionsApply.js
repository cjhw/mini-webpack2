const EntryOptionPlugin = require('./EntryOptionsPlugin')

// 挂载各种各样的内置插件

class WebpackOptionsApply {
  process(options, compiler) {
    // 注册插件
    new EntryOptionPlugin().apply(compiler)
    // 触发钩子
    compiler.hooks.entryOption.call(options.context, options.entry)
  }
}

module.exports = WebpackOptionsApply
