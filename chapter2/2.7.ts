import { SinglyList, SinglyListNode } from './2.0';

const intersection = (list1: SinglyList<any>, list2: SinglyList<any>): SinglyListNode<any> => {
    const set = new Set()
    let node1 = list1.getHead()
    while (node1) {
        set.add(node1)        
        node1 = node1.next
    }
    let node2 = list2.getHead()
    while (node2) {
        if (set.has(node2)) return node2
        node2 = node2.next
    }
    return null
}

const intersection2 = (node1: SinglyListNode<any>, node2: SinglyListNode<any>, length1: number, length2: number): SinglyListNode<any> => {
    if (!node1.next && !node2.next) {
        return node1 === node2 ? node1 : null
    }
    if (length1 > length2) {
        length1--
        node1 = node1.next ? node1.next : node1
    } else if (length2 > length1) {
        node2 = node2.next ? node2.next : node2
        length2--
    } else {
        node1 = node1.next ? node1.next : node1
        node2 = node2.next ? node2.next : node2
    }
    
    const lastNodeIntersection = intersection2(node1, node2, length1, length2)

    return node1 === node2 ? node1 : lastNodeIntersection
}

const intersection3 = (list1: SinglyList<any>, list2: SinglyList<any>): SinglyListNode<any> => {
    let node1 = list1.getHead(), node2 = list2.getHead()
    let length1 = 0, length2 = 0
    while (node1.next) {
        length1++
        node1 = node1.next
    }
    while (node2.next) {
        length2++
        node2 = node2.next
    }
    if (node1 !== node2) return null

    const difference = Math.abs(length1-length2)
    let bigList = length1 >= length2 ? list1.getHead() : list2.getHead()
    let smallList = length1 >= length2 ? list2.getHead() : list1.getHead()

    for (let i = 0; i < difference && bigList.next; i++) bigList = bigList.next

    while (smallList != bigList) {
        smallList = smallList.next
        bigList = bigList.next
    }
    return smallList
}

const singlyList1 = new SinglyList<string>();
singlyList1.insertAtEnd('A');
singlyList1.insertAtEnd('B');
singlyList1.insertAtEnd('C');
singlyList1.insertAtEnd('D');
singlyList1.insertAtEnd('E');
singlyList1.insertAtEnd('F');
const node = singlyList1.insertAtEnd('G');
singlyList1.insertAtEnd('H');

const singlyList2 = new SinglyList<string>();
singlyList2.insertAtEnd('1');
singlyList2.insertAtEnd('2');
singlyList2.setTail(node);
singlyList2.insertAtEnd('3');
singlyList2.insertAtEnd('4');

console.log(intersection(singlyList1, singlyList2))

console.log(intersection2(singlyList1.getHead(), singlyList2.getHead(), singlyList1.getLength(), singlyList2.getLength()))

console.log(intersection3(singlyList1, singlyList2))