import { SinglyList, SinglyListNode } from './2.0';

const sumLists = (node1: SinglyListNode<number>, node2: SinglyListNode<number>, 
    carry: number = 0, newList: SinglyList<number> = null): SinglyList<number> => {
    if (!node1 && !node2) {
        if (carry > 0) newList.insertAtEnd(carry)
        return newList
    }
    
    let digitSum = carry

    if (node1) {
        digitSum += node1.data
        node1 = node1.next
    }

    if (node2) {
        digitSum += node2.data
        node2 = node2.next
    } 

    carry = 0
    if (digitSum >= 10) {
        carry = Math.floor(digitSum / 10)
        digitSum = digitSum % 10
    }
    if (!newList) newList = new SinglyList<number>()
    newList.insertAtEnd(digitSum)

    return sumLists(node1, node2, carry, newList)
}

const sumLists2 = (n1: SinglyList<number>, n2: SinglyList<number>): SinglyList<number> => { //straight
    const listToNumber = (node: SinglyListNode<number>): {result: number, index: number} => {
        if (!node.next) {
            return {result: node.data, index: 0}
        }
        const recursiveCall = listToNumber(node.next);
        const index = recursiveCall.index + 1
        const result = recursiveCall.result + node.data * (10 ** index)
        return {result, index}
    }
    const num1 = listToNumber(n1.getHead()).result
    const num2 = listToNumber(n2.getHead()).result
    const sum = num1 + num2

    const newList = new SinglyList<number>()
    for (const char of sum.toString()) {
        newList.insertAtEnd(Number(char))
    }
    return newList
}

const fillSizeDifferenceWithZeros = (head1: SinglyListNode<number>, head2: SinglyListNode<number>)
: {head1: SinglyListNode<number>, head2: SinglyListNode<number>}=> { 
    let node1 = head1
    let node2 = head2
    while (node1 || node2) {
        if (node2 && !node1) {
            node2 = node2.next
            const newHead = new SinglyListNode(0)
            newHead.next = head1
            head1 = newHead
        } else if (node1 && !node2) {
            node1 = node1.next
            const newHead = new SinglyListNode(0)
            newHead.next = head2
            head2 = newHead
        } else {
            node1 = node1.next
            node2 = node2.next
        }
    }
    return {head1, head2}
}

const sumLists3 = (node1: SinglyListNode<number>, node2: SinglyListNode<number>, isFirstCall = true)
        : {newList: SinglyList<number>, carry: number} => { //straight
        
    if (isFirstCall) {
        const newHeads = fillSizeDifferenceWithZeros(node1, node2)
        node1 = newHeads.head1
        node2 = newHeads.head2
    }
    
    let digitSum = 0

    if (node1) digitSum += node1.data
    if (node2) digitSum += node2.data

    let carry = 0
    let newList = new SinglyList<number>()
    if (node1.next && node2.next) {
        const recursiveResponse = sumLists3(node1.next, node2.next, false)
        carry = recursiveResponse.carry
        newList = recursiveResponse.newList
    }
    digitSum += carry

    carry = 0
    if (digitSum >= 10) {
        carry = Math.floor(digitSum / 10)
        digitSum = digitSum % 10
    }

    newList.insertInBegin(digitSum)
    
    if (isFirstCall && carry > 0) newList.insertInBegin(carry)
    return {newList, carry}
}

const n1 = new SinglyList<number>();
n1.insertAtEnd(9); //9137
n1.insertAtEnd(1);
n1.insertAtEnd(3);
n1.insertAtEnd(7);

const n2 = new SinglyList<number>();
n2.insertAtEnd(5); //518889
n2.insertAtEnd(1);
n2.insertAtEnd(8);
n2.insertAtEnd(8);
n2.insertAtEnd(8);
n2.insertAtEnd(9);

const sum1 = sumLists(n1.getHead(), n2.getHead())
console.log(sum1.transverse())

const sum2 = sumLists2(n1, n2)
console.log(sum2.transverse())

const sum3 = sumLists3(n1.getHead(), n2.getHead()).newList
console.log(sum3.transverse())
