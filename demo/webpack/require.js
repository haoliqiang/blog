let fs = require('fs')
// 查找module
function myReq(myModule) {
  // 读取文件信息
  let cont = fs.readFileSync(myModule, 'utf-8')
  /* function (exports, require, module, __filename, __dirname) {
    moduel.exports = {a: 'apple'}
    return moduel.exports
  } */
  let nodeFn = new Function('exports', 'require', 'module', '__filename', '__dirname', cont + 'return module.exports')
  let module = {
    exports: {}
  }
  console.log(cont)
  return nodeFn(module.exports, myReq, module, __filename, __dirname)
}
// let getA = require('./a')
let getA = myReq('/Users/haoliqiang/plot/blog/demo/webpack/a.js')
console.log(getA, 'getA')
