import { slice } from '../es5/slice'
export function from(arrayLike: { length: number; [key: number]: string }) {
  return slice(arrayLike as any[])
}

// test

const person = {
  0: '小猪猪',
  1: '小花花',
  length: 2
}

// console.log(from(person))
