//队列是一种先进先出的数据结构

class Queue {
    constructor(){
        this.dataStore = []
    }
    enqueue(item) {
        this.dataStore.push(item)
        console.log(this.dataStore)
    }
    outqueue(item) {
       return this.dataStore.splice(0,1)[0]
    }
    first(){
        return this.dataStore[0]
    }
    last() {
        return this.dataStore[this.dataStore[this.dataStore.length -1]]
    }
}
