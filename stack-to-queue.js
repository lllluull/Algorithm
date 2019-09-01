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
        this.queue = []
    }
    push(item) {
        const firstData = new Stack
        const secondData = new Stack
        if(this.queue.length === 0 ) {
            this.queue.push(item)
            return
        }
        let lent = this.queue.length
        Array(lent).fill(0).forEach(item => {
            firstData.push(this.queue.pop())
        })
        firstData.push(item)
        const len = firstData.stack.length
        Array(len).fill(0).forEach(item => {
            secondData.push(firstData.stack.pop())
        })
        this.queue = secondData.stack
    }
    pop() {
        return this.queue.pop()
    }
}
