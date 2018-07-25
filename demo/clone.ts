export function shallowClone(object: any) {
  const obj = {}
  for (let i in object) {
    if (object.hasOwnProperty(i)) {
      obj[i] = object[i]
    }
  }
  return obj
}
// 被克隆对象
// const oldObj = {
//   a: 1,
//   b: [ 'e', 'f', 'g' ],
//   c: { h: { i: 2 } }
// };

// const newObj = shallowClone(oldObj);
// console.log(newObj.c.h, oldObj.c.h); // { i: 2 } { i: 2 }
// console.log(oldObj.c.h === newObj.c.h); // true
