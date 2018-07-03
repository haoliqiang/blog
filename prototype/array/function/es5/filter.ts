export function filter(array: any[], predicate: Function) {
  let index = -1
  let resIndex = 0
  const length = array === null || array === undefined ? 0 : array.length
  const result = []
  while (++index < length) {
    const value = array[index]
    if (predicate(value, index, array)) {
      result[resIndex++] = value
    }
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
console.log(filter(person, (v: { name: string; age: number }) => v.age > 12))
