export function slice(array: any[], begin?: number, end?: number) {
  let length = array === null || array === undefined ? 0 : array.length
  if (!length) return []
  let index = -1
  begin = begin === null || begin === undefined ? 0 : begin
  end = end === null || end === undefined ? length : end > length ? length : end
  if (begin < 0) {
    begin = -begin > length ? 0 : length + begin
  }
  if (end < 0) {
    end += length
  }
  length = begin > end ? 0 : end - begin
  const result = new Array(length)
  while (++index < end - begin) {
    result[index] = array[begin + index]
  }
  return result
}

// test

const person = [
  {
    name: '小猪猪',
    age: 18
  },
  {
    name: '小花花',
    age: 12
  }
]
// console.log(slice(person, 1))
