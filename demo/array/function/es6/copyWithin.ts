export function copyWithin(array: any[], target: number, start: number, end: number = array.length) {
  let length = array.length
  if (!length) return []
  let index = -1
  target = target < 0 ? Math.max(length + target, 0) : Math.min(target, length)
  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length)
  end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length)
  let count = Math.min(end - start, length - target)
  while (++index < count) {
    array[target + index] = array[start + index]
  }
  return array
}

// console.log(copyWithin([1, 2, 3], 0, 1)) //[ 2, 3, 3 ]
