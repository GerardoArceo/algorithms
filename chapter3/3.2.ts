class StackNode<T> {
    prev: StackNode<T>
    min: T

    constructor(public data: T) {}
}

class Stack<T> {
    private top: StackNode<T>

    pop(): T {
        if (!this.top) throw new Error("Nothing to pop")

        const value = this.top.data
        this.top = this.top.prev
        return value
    }

    push(data) {
        const newTop = new StackNode(data)
        let min = this.top ? this.top.min : data
        newTop.prev = this.top
        this.top = newTop

        this.top.min = min < data ? min : data
    }

    peekMin(): T {
        if (!this.top || !this.top.min) return null
        return this.top.min
    }

    isEmpty(): boolean {
        return this.top === null
    }
}

const stack = new Stack<number>()
stack.push(1)
stack.push(63)
stack.push(1231)
stack.push(14)
stack.push(0)
stack.push(-3)
stack.push(1)
stack.push(54)

console.log(stack.peekMin());