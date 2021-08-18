export class StackNode<T> {
    prev: StackNode<T>

    constructor(public data: T) {}
}

export class Stack<T> {
    protected top: StackNode<T>

    pop(): T {
        if (this.top === null) throw new Error("Nothing to pop")

        const value = this.top.data
        this.top = this.top.prev
        return value
    }

    push(data) {
        const newTop = new StackNode(data)
        newTop.prev = this.top
        this.top = newTop
    }

    peek(): T {
        if (this.top === null) throw new Error("Nothing to peek")
        return this.top.data
    }

    isEmpty(): boolean {
        return this.top === null
    }
}




class QueueNode<T> {
    next: QueueNode<T>

    constructor(public data: T) {}
}

class Queue<T> {
    private first: QueueNode<T>
    private last: QueueNode<T>

    remove(): T {
        if (this.first === null) throw new Error("Nothing to remove")

        const value = this.first.data
        this.first = this.first.next
        return value
    }

    add(data) {
        const newLast = new QueueNode(data)
        if (this.last === null) {
            this.last === newLast
        } else {
            this.last.next = newLast
        }

        if (this.first === null) this.first = this.last
    }

    peek(): T {
        if (this.first === null) throw new Error("Nothing to peek")
        return this.first.data
    }

    isEmpty(): boolean {
        return this.first === null
    }
}
