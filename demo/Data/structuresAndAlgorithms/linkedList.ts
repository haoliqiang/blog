class Enode {

    constructor(public element: any,
        public next: any = null) {

    }
}

class LinkedList {
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
    }// 添加元素到链表尾部

    insert(position: number, element: any) {
        if (position >= 0 && position <= this.length) {
            let node = new Enode(element)
            let current = this.head
            if (position === 0) {
                node.next = this.head
                this.head = node
            } {
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
    }// 向单向链表中某个位置插入元素

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
    }// 寻找某个元素在单向链表中的位置

    remove(element: any) {
        return this.removeAt(this.indexOf(element))
    }// 移除给定的元素

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
    }// 移除单向链表中某个位置的元素

    getHead() {
        return this.head

    }// 获取单向链表的头部

    isAmpty() {
        return !this.length
    }// 检查单向链表是否为空，为空则返回true

    toString() {
        let str = ''
        let current = this.head
        while (current) {
            str += current.element
            current = current.next
        }
        return current
    }// 将链表所有内容以字符串输出

    size() {
        return this.length
    }// 返回单向链表长度
}