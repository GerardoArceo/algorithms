import { SinglyList, SinglyListNode } from './2.0';

const sumLists = (node1: SinglyListNode<number>, node2: SinglyListNode<number>, 
    carry: number = 0, newList: SinglyList<number> = null): SinglyList<number> => {
    if (!node1 && !node2) {
        if (carry > 0) newList.insertAtEnd(carry)
        return newList
    }
    
    let sum = carry

    if (node1) {
        sum += node1.data
        node1 = node1.next
    }

    if (node2) {
        sum += node2.data
        node2 = node2.next
    } 

    if (!newList) newList = new SinglyList<number>()
    newList.insertAtEnd(splitSum(sum).number)

    return sumLists(node1, node2, splitSum(sum).carry, newList)
}

const sumLists2 = (head1: SinglyListNode<number>, head2: SinglyListNode<number>): SinglyList<number> => { //straight
    const listToNumber = (node: SinglyListNode<number>): {result: number, index: number} => {
        if (!node.next) {
            return {result: node.data, index: 0}
        }
        const recursiveCall = listToNumber(node.next);
        const index = recursiveCall.index + 1
        const result = recursiveCall.result + node.data * (10 ** index)
        return {result, index}
    }
    const num1 = listToNumber(head1).result
    const num2 = listToNumber(head2).result
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

const splitSum = (sum: number): {number: number, carry: number} => {
    return sum < 10 ? {number: sum, carry: 0} : {number: sum % 10, carry: Math.floor(sum / 10)}
}

const sumLists3 = (head1: SinglyListNode<number>, head2: SinglyListNode<number>): SinglyList<number> => { //straight    
    ({ head1, head2 } = fillSizeDifferenceWithZeros(head1, head2));
    
    let newList = new SinglyList<number>()

    const recursive = (node1: SinglyListNode<number>, node2: SinglyListNode<number>): {carry: number} => { //straight
        let sum = node1.data + node2.data

        sum += node1.next && node2.next ? recursive(node1.next, node2.next).carry : 0
        
        newList.insertInBegin(splitSum(sum).number)
        return {carry: splitSum(sum).carry}
    }

    const resultCarry = recursive(head1, head2).carry
    if (resultCarry > 0) newList.insertInBegin(resultCarry)
    return newList
}

const sumLists4 = (l1: SinglyListNode<number> | null, l2: SinglyListNode<number> | null): SinglyList<number> | null => {
    let carry = 0
    let head: SinglyListNode<number>
    let node: SinglyListNode<number>
    
    while (l1 || l2 || carry > 0) {
        let sum = carry
        if (l1) sum += l1.data
        if (l2) sum += l2.data
        
        const digitToSave = sum % 10
        carry = Math.floor(sum / 10)
        
        if (!head) {
            head = new SinglyListNode(digitToSave)
            node = head
        } else {
            const newNode = new SinglyListNode(digitToSave)
            node.next = newNode
            node = newNode
        }
        
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    
    return new SinglyList(head)
};

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

const sum2 = sumLists2(n1.getHead(), n2.getHead())
console.log(sum2.transverse())

const sum3 = sumLists3(n1.getHead(), n2.getHead())
console.log(sum3.transverse())

const sum4 = sumLists4(n1.getHead(), n2.getHead())
console.log(sum4.transverse())
