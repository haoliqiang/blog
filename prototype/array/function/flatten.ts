import { arrayPush } from './es5/push'
import { isArray } from './es5/isArray'
let spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
  undefinedTag = '[object Undefined]',
  nullTag = '[object Null]',
  symToStringTag = Symbol ? Symbol.toStringTag : undefined
export function baseFlatten(array: any[], depth: number, result: any[] = []) {
  let index = -1,
    length = array.length

  while (++index < length) {
    let value = array[index]
    if (depth > 0 && isArray(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, result)
      } else {
        arrayPush(result, value)
      }
    } else {
      result[result.length] = value
    }
  }
  return result
}
