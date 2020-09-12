// 目前有两种深克隆方法,存在问题：1、无法实现对函数、RegExp等特殊对象的克隆，2、构造函数 constructor指向变为指向Object，3、对象有循环引用，会报错
// 1. JSON.parse(JSON.stringify(object))
// 2.
// function deepClone(obj) {
//   if (typeof obj !== 'object' && typeof obj !== 'function') {
//     return obj
//   }
//   let o = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
//     }
//   }
//   return o
// }

function isType(obj: any, type: string) {
  if (typeof obj !== 'object') return false
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}

function getRegExp(re: RegExp) {
  let flag = ''
  if (re.global) flag += 'g'
  if (re.ignoreCase) flag += 'i'
  if (re.multiline) flag += 'm'
  return flag
}

function deepClone(object: any) {
  const parents: any[] = []
  const childrens: any[] = []

  function clone(parent: any) {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent

    let child
    let proto
    if (isType(parent, 'Array')) {
      child = []
    } else if (isType(parent, 'RegRxp')) {
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      child = new Date(parent.getTime())
    } else {
      proto = Object.getPrototypeOf(parent)
      child = Object.create(proto)
    }
    const index = parents.indexOf(parent)
    if (index !== -1) return childrens[index]

    parents.push(parent)
    childrens.push(child)

    for (let i in parent) {
      if (parent.hasOwnProperty(i)) child[i] = clone(parent[i])
    }
    return child
  }

  return clone(object)
}

// 构造函数
// function person(pname) {
//   this.name = pname
// }

// const Messi = new person('Messi')

// 函数
// function say() {
//   console.log('hi')
// }

// const oldObj = {
//   a: say,
//   b: new Array(1),
//   c: new RegExp('ab+c', 'i'),
//   d: Messi
// }

// const newObj = deepClone(oldObj)

// // 无法复制函数
// console.log(newObj.a, oldObj.a) // undefined [Function: say]
// // 稀疏数组复制错误
// console.log(newObj.b[0], oldObj.b[0]) // null undefined
// // 无法复制正则对象
// console.log(newObj.c, oldObj.c) // {} /ab+c/i
// // 构造函数指向错误
// console.log(newObj.d.constructor, oldObj.d.constructor) // [Function: Object] [Function: person]
