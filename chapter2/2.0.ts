export class DoubleListNode<T> {
    prev: DoubleListNode<T> | null = null
    next: DoubleListNode<T> | null = null

    constructor(public data: T) { }
}

export class DoubleList<T> {
    protected head: DoubleListNode<T>

    insertInBegin(data: T): DoubleListNode<T> {
        let node = new DoubleListNode<T>(data)
        if (!this.head) {
            this.head = node
        } else {
            this.head.prev = node
            node.next = this.head
        }
        return node
    }

    insertAtEnd(data: T): DoubleListNode<T> {
        let node = new DoubleListNode<T>(data)
        if (!this.head) {
            this.head = node
        } else {
            let lastNode = this.head
            while (lastNode.next) {
                lastNode = lastNode.next
            }
            node.prev = lastNode
            lastNode.next = node
        }
        return node
    }

    transverse(): T[] {
        if (!this.head) {
            return []
        } else {
            const array: T[] = []
            let currentNode = this.head
            while (currentNode) {
                array.push(currentNode.data)
                currentNode = currentNode.next
            }
            return array
        }
    }

    removeNode(node: DoubleListNode<T>): void {
        const prevNode = node.prev
        const nextNode = node.next

        if (!prevNode) { //is the head
            this.head = nextNode
            return
        }
        if (!nextNode) { //is the tail
            prevNode.next = null
            return
        }
        nextNode.prev = prevNode
        prevNode.next = nextNode
    }

    getHead(): DoubleListNode<T> {
        return this.head
    }
}





export class SinglyListNode<T> {
    next: SinglyListNode<T> | null = null

    constructor(public data: T) { }
}

export class SinglyList<T> {
    protected head: SinglyListNode<T>
    protected tail: SinglyListNode<T>

    constructor(head: SinglyListNode<T> = null) { 
        this.head = head
    }

    insertInBegin(data: T): SinglyListNode<T> {
        let node = new SinglyListNode<T>(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        return node
    }

    insertAtEnd(data: T): SinglyListNode<T> {
        let node = new SinglyListNode<T>(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        return node
    }

    transverse(): T[] {
        if (!this.head) {
            return []
        } else {
            const array: T[] = []
            let currentNode = this.head
            while (currentNode) {
                array.push(currentNode.data)
                currentNode = currentNode.next
            }
            return array
        }
    }

    removeNode(node: SinglyListNode<T>): void {
        if (node == this.head) {
            this.head = node.next
            return
        }
        let previousNode = this.head
        while (previousNode.next != node) {
            previousNode = previousNode.next
        }
        previousNode.next = node.next
    }

    getHead(): SinglyListNode<T> {
        return this.head
    }

    setTail(tail: SinglyListNode<T>) {
        this.tail.next = tail
        this.tail = tail
    }

    getLength = (node: SinglyListNode<T> = this.head) => {
        let length = 0
        while (node) {
            length++
            node = node.next
        }
        return length
    }
}
