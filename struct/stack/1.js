// 栈被称为后入先出的（LIFO）数据结构

class Stack {
    constructor() {
        this.dataStore = []
    }
    push(item) {
        this.dataStore.push(item)
        return this.dataStore
    }
    pop(item) {
        return this.dataStore.pop()
    }
    peek(){
        return this.dataStore[this.dataStore.length -1]
    }
}

const isPaliWord = strings => {
    const newStack = new Stack
    strings.split('').forEach(v => newStack.push(v))
    return Array(newStack.dataStore.length).fill(1).map(v => newStack.dataStore.pop()).join('') === strings
}

