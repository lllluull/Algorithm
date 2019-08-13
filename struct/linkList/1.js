class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class Llist {
    constructor() {
        this.head = new Node('head')
    }
    find(element) {
        let currentNode = this.head
        while (currentNode.element !== element ) {
            currentNode = currentNode.next
        }

        if (currentNode.element === element) {
            return currentNode
        } 
        console.log("not find")
    }
    findPrevious(element) {
        let currentNode = this.head
        while (currentNode.next !== null && currentNode.next.element !== element) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(element, prev) {
        const currentNode = this.find(prev)
        if(currentNode) {
            const newElement = new Node(element)
            newElement.next = currentNode.next
            currentNode.next = newElement
        }
    }
    display() {
        let currentNode = this.head
        while(currentNode.next !== null) {
            currentNode = currentNode.next
            console.log(currentNode.element)
        }
    }
    remove(element){
        const prev = this.findPrevious(element)
        if(prev.next === null ) return
        prev.next = prev.next.next
        prev.next.next = null
    }
}




const test = new Llist

test.insert("pp", 'head')
test.insert("ppr", 'head')
test.display()

