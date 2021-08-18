const array = []
let stackIndexes = [
    {firstIndex: 0, lastIndex: 0},
    {firstIndex: 1, lastIndex: 1},
    {firstIndex: 2, lastIndex: 2},
]

const getIndexLastElementInArray = (): number => {
    let lastIndex = 0
    for (const stack of stackIndexes) {
        if (stack.lastIndex > lastIndex) {
            lastIndex = stack.lastIndex
        }
    }
    return lastIndex + 1
}

const pushInStack = (element: any, i: number) => {
    const selectedStack = stackIndexes[i]

    const stackColission = stackIndexes.find(stack => selectedStack !==stack && stack.firstIndex === selectedStack.lastIndex)
    if (stackColission) {
        const newStartIndex = getIndexLastElementInArray()
        let counter = 0
        for (let i = stackColission.firstIndex; i < stackColission.lastIndex; i++, counter++) {
            array[newStartIndex + counter] = array[i]
            array[i] = undefined
        }
        stackColission.firstIndex = newStartIndex
        stackColission.lastIndex = newStartIndex + counter
    }

    array[selectedStack.lastIndex] = element
    selectedStack.lastIndex++
}

const printStack = (i: number) => {
    console.log("STACK: " + i)
    const stack = stackIndexes[i]
    for (let i = stack.lastIndex - 1; i >= stack.firstIndex; i--) {
        console.log(array[i])
    }
}

pushInStack(101, 0)
pushInStack(102, 0)
pushInStack(103, 0)

pushInStack(201, 1)
pushInStack(202, 1)
pushInStack(203, 1)

pushInStack(301, 2)
pushInStack(302, 2)
pushInStack(303, 2)

pushInStack(104, 0)
pushInStack(105, 0)
pushInStack(106, 0)
pushInStack(107, 0)

pushInStack(304, 2)
pushInStack(305, 2)
pushInStack(306, 2)

printStack(0)
printStack(1)
printStack(2)

// console.log(stackIndexes)

