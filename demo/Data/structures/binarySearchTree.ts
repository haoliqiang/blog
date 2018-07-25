class TreeNode {
  constructor(public key: any, public left: any = null, public right: any = null) {}
}

class BinarySearchTree {
  constructor(public root: any = null) {}

  insert(key) {
    let newNode = new TreeNode(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  } // 向树中插入一个新的键

  inOrderTraverse(callback) {
    return this.inOrderTraverseNode(this.root, callback)
  } // 通过中序遍历方式，遍历所有节点

  preOrderTranverse(callback) {
    return this.preOrderTranverseNode(this.root, callback)
  } // 通过先序遍历方式，遍历所有节点

  postOrderTranverse(callback) {
    return this.postOrderTranverseNode(this.root, callback)
  } // 通过后序遍历方式，遍历所有节点

  min() {
    return this.minNode(this.root)
  } // 返回树中最小的值

  max() {
    return this.maxNode(this.root)
  } // 返回树中最大的值

  search(key) {
    return this.searchNode(this.root, key)
  } // 搜索某个值，在树中则返回true

  remove(key) {
    this.root = this.removeNode(this.root, key)
  } // 从树中移除某个键
  private removeNode(node, key) {
    if (!node) {
      return null
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      let aux = this.findMinNode(node.right)
      node.key = aux.key

      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
  private findMinNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node
    }
    return null
  }
  private searchNode(node, key) {
    if (node === null) {
      return false
    } else if (key < node.key) {
      this.searchNode(node.left, key)
    } else if (key > node.key) {
      this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  private minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  private maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  private inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  private preOrderTranverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTranverseNode(node.left, callback)
      this.preOrderTranverseNode(node.right, callback)
    }
  }
  private postOrderTranverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTranverseNode(node.left, callback)
      this.postOrderTranverseNode(node.right, callback)
      callback(node.key)
    }
  }
  private insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
}

// let tree = new BinarySearchTree()
// tree.insert(5)
// tree.insert(4)
// tree.insert(7)
// tree.insert(6)
// tree.insert(8)
// tree.insert(2)
// console.log(tree.preOrderTranverse(e => console.log('preOrderTranverse', e)))
