let fs = require('fs')

class NodeEnvironmentPlugin {
  constructor(options) {
    this.options = options || {}
  }
  apply(compiler) {
    compiler.inputFileSystem = fs // 读文件 fs.readFile
    compiler.outputFileSystem = fs // 写文件 fs.writeFile
  }
}

module.exports = NodeEnvironmentPlugin
