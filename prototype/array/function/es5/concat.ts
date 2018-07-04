import { isArray } from './isArray'
import { arrayPush } from './push'
import { baseFlatten } from '../flatten'

export function concat(...arg: any[]): any[] {
  const length = arg.length
  if (!length) return []
  let args = new Array(length - 1),
    array = arg[0],
    index = length

  while (index--) {
    args[index - 1] = arg[index]
  }
  return arrayPush(isArray(array) ? array : [array], baseFlatten(args, 1))
}

console.log(concat([1, 2, 3], [4, 6, 5], [7, 8, 9]))
