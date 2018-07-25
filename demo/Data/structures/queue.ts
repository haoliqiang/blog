class Queue {
  public item: any[] = []
  enqueue(element: any) {
    this.item.push(element)
  } // 向队列尾部添加几个项

  dequeue() {
    return this.item.shift()
  } // 移除队列的第一项(也就是排在最前面的项)
  size() {
    return this.item.length
  }
  front() {
    return this.item[0]
  } // 返回队列的第一个元素，也就是最新添加的那个
}

/**
 * 击鼓传花的小游戏
 * @param  {Array}  nameList 参与人员列表
 * @param  {Number} num      在循环中要被弹出的位置
 * @return {String}          返回赢家(也就是最后活下来的那个)
 */
function hotPotato(nameList: any[], num: number) {
  let queue = new Queue()

  for (let i of nameList) {
    queue.enqueue(i)
  }

  let eliminated = ''

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    eliminated = queue.dequeue()
    console.log(eliminated + ' Get out!')
  }

  return queue.dequeue()
}
