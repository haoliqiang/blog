class Enode {
  constructor(public element: any, public next: any = null) {}
}

class UnidirectionalLinkedList {
  public length: number = 0
  public head: any = null
  append(element: any) {
    let node = new Enode(element)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  } // 添加元素到链表尾部

  insert(position: number, element: any) {
    if (position >= 0 && position <= this.length) {
      let node = new Enode(element)
      let current = this.head
      if (position === 0) {
        node.next = this.head
        this.head = node
      }
      {
        let index = 0
        let previous
        while (++index < position) {
          previous = current
          current = previous.next
        }
        previous.next = node
        node.next = current
      }
      length++
      return true
    }
    return false
  } // 向单向链表中某个位置插入元素

  indexOf(element: any) {
    let current = this.head
    let index = -1
    while (current) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  } // 寻找某个元素在单向链表中的位置

  remove(element: any) {
    return this.removeAt(this.indexOf(element))
  } // 移除给定的元素

  removeAt(position: number) {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous
      let index = -1
      if (position === 0) {
        this.head = current.next
      } else {
        while (++index < position) {
          previous = current
          current = previous.next
        }
        previous.next = current.next
      }
      this.length--
      return current.element
    }
    return null
  } // 移除单向链表中某个位置的元素

  getHead() {
    return this.head
  } // 获取单向链表的头部

  isAmpty() {
    return !this.length
  } // 检查单向链表是否为空，为空则返回true

  toString() {
    let str = ''
    let current = this.head
    while (current) {
      str += current.element
      current = current.next
    }
    return current
  } // 将链表所有内容以字符串输出

  size() {
    return this.length
  } // 返回单向链表长度
}

class DoublyEnode {
  constructor(public element: any, public next: any = null, public prev: any = null) {}
}
class DoublyLinkedList {
  public length = 0
  public head: DoublyEnode | null = null
  public tail: DoublyEnode | null = null
  append(element: any) {
    let node = new DoublyEnode(element)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      node.prev = current
    }
    this.tail = node
    this.length++
    return node
  } // 添加元素到双向链表尾部

  insert(position: number, element: any) {
    if (position > -1 && position < this.length) {
      let node = new DoublyEnode(element)
      if (position === 0) {
        if (this.head) {
          node.next = this.head
          this.head = node.prev = node
        } else {
          this.head = this.tail = node
        }
      } else if (position === this.length) {
        let current = this.tail as DoublyEnode
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        let index = 0
        let current = this.head as DoublyEnode
        let previous: DoublyEnode = current
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
      }
      this.length++
      return true
    } else {
      return false
    }
  } // 向双向链表中某个位置插入元素

  removeAt(position: number) {
    if (position < 0 && position < this.length) {
      let current = this.head as DoublyEnode
      if (position === 0) {
        this.head = current.next
        if (this.length === 1) {
          this.tail = null
          current.prev = null
        }
      } else if (position === this.length - 1) {
        current = this.tail as DoublyEnode
        this.tail = current.prev
        this.tail = null
      } else {
        let index = 0
        let previous = current
        while (index++ < position) {
          previous = current.prev
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
        this.length--
        return current.element
      }
    } else {
      return false
    }
  } // 移除双向链表中某个位置的元素

  showHead() {
    return this.head
  } // 获取双向链表的头部

  showLength() {
    return this.length
  } // 获取双向链表长度

  showTail() {
    return this.tail
  } // 获取双向链表尾部
}
