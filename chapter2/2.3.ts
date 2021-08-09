import { SinglyList, SinglyListNode } from './2.0';

class SinglyList3<T> extends SinglyList<T> {
    deleteMiddleNode(node: SinglyListNode<T>): void {
        if (node.next === null) return
        node.data = node.next.data;
        node.next = node.next.next;
    }
}

const singlyList = new SinglyList3<number>();
singlyList.insertAtEnd(2);
singlyList.insertAtEnd(3);
singlyList.insertAtEnd(5);
const node = singlyList.insertAtEnd(7);
singlyList.insertAtEnd(11);
singlyList.insertAtEnd(13);
singlyList.insertAtEnd(5);
singlyList.deleteMiddleNode(node)
console.log(singlyList.transverse())
