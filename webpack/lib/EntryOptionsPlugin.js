const SingleEntryPlugin = require('./SingleEntryPlugin')

const itemToPlugin = (context, item, name) => {
  // 单入口插件
  return new SingleEntryPlugin(context, item, name)
}

class EntryOptionsPlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap('EntryOptionPlugin', (context, entry) => {
      if (typeof entry === 'string') {
        itemToPlugin(context, entry, 'main').apply(compiler)
      } else {
        for (let entryName in entry) {
          itemToPlugin(context, entry[entryName], entryName).apply(compiler)
        }
      }
    })
  }
}

module.exports = EntryOptionsPlugin
