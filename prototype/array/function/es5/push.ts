export function push(array: any[], value: any) {
  array[array.length] = value
  return array
}
export function arrayPush(array: any[], values: any[]) {
  let offset = array.length,
    length = values.length,
    index = -1
  while (++index < length) {
    array[offset + index] = values[index]
  }
  return array
}
// console.log(push([1, 2], 4), arrayPush([1, 2], [3, 5])) // [ 1, 2, 4 ] [ 1, 2, 3, 5 ]
