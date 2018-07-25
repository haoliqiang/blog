class Stack {
    public item: any[] = []
    push(element: any) { // 添加几个元素到栈顶
        this.item.push(element)
    }

    pop() { // 移除并返回栈顶元素
        return this.item.pop()
    }

    peek() { // 返回栈顶元素
        return this.item.slice(-1)
    }

    isAmpty() { // 检查栈是否为空，为空则返回true
        return !this.item.length
    }

    clear() { // 移除栈中所有元素
        this.item = []
    }

    size() { // 返回栈中元素个数。
        return this.item.length
    }

    print() { // 以字符串显示栈中所有内容
        console.log(this.item.toString())
    }
}


/**
 * 将10进制数字转为2进制数字
 * @param  {Number} decNumber 要转换的10进制数字
 * @return {Number}           转换后的2进制数字
 */
function divideBy2(decNumber: number) {

    let remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isAmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}
