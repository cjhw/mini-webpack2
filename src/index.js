// 如果遇到了import，那么import的模块会成为一个单独的入口，会生成一个单独的代码块，生成一个单独的文件
// require('./sync')

// import(/*webpackChunkName: 'title'*/ './title').then((result) => {
//   console.log(result.default)
// })

// import(/*webpackChunkName: 'sum'*/ './sum').then((result) => {
//   console.log(result.default)
// })

// let title = require('./title')

// console.log(title)

// 加载第三方模块
// let isarray = require('isarray')
// console.log(isarray([1, 2, 3, 4]))

//loader
require('./index.less')
