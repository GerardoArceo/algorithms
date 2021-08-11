import { SinglyList, SinglyListNode } from './2.0';

const loopDetection = (list: SinglyList<any>): SinglyListNode<any> => {
    const set = new Set()
    let node = list.getHead();
    while (node.next) {
        if (set.has(node)) {
            return node
        }
        set.add(node)
        node = node.next;
    }
    return null
}

const loopDetection2 = (list: SinglyList<any>): SinglyListNode<any> => {
    let slow = list.getHead()
    let fast = list.getHead()

    let intersection = null
    while (slow && fast) {
        slow = slow.next
        fast = fast.next
        if (fast) fast = fast.next
        else break

        if (slow === fast) {
            intersection = slow
            break
        }
    }
    if (!intersection) return null

    slow = list.getHead()
    while (slow && fast) {
        slow = slow.next
        fast = fast.next
        if (slow === fast) {
            return slow
        }
    }
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
singlyList1.insertAtEnd('I');
singlyList1.insertAtEnd('J');
singlyList1.setTail(node);

console.log(loopDetection(singlyList1))
console.log(loopDetection2(singlyList1))
