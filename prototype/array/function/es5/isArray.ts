export function isArray(array: any): boolean {
  return Object.prototype.toString.call(array) === '[object Array]'
}
// console.log(isArray([1, 2, 3]))
// console.log(isArray(1))
