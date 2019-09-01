class Stack {
    constructor() {
        this.stack = []
    }
    push(item) {
        this.stack.push(item)
    }
    pop() {
       return this.stack.pop()
    }
}

class Queue {
    constructor() {
        this.inputStack = new Stack
        this.outPutStack = new Stack
    }
    push(item) {
        this.inputStack.push(item)
    }
    pop() {
        if(this.outPutStack.stack.length > 0) {
            return this.outPutStack.pop() 
        }
        const length = this.inputStack.stack.length
        Array(length).fill(0).forEach(() => {
            this.outPutStack.push(this.inputStack.pop())
        })
        return this.outPutStack.pop()
    }
}