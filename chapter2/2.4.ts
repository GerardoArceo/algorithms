import { SinglyList, SinglyListNode } from './2.0';

class SinglyList4<T> extends SinglyList<T> {
    partition(x: T): SinglyList4<T> {
        const newList = new SinglyList4<T>()
        let currentNode = this.head
        while(currentNode) {
            if(currentNode.data < x)
                newList.insertInBegin(currentNode.data)
            else
                newList.insertAtEnd(currentNode.data)
            currentNode = currentNode.next
        }
        return newList
    }
}

let singlyList = new SinglyList4<number>();
singlyList.insertAtEnd(2);
singlyList.insertAtEnd(13);
singlyList.insertAtEnd(3);
singlyList.insertAtEnd(7);
singlyList.insertAtEnd(5);
singlyList.insertAtEnd(1);
singlyList.insertAtEnd(5);
singlyList.insertAtEnd(11);
singlyList = singlyList.partition(5)
console.log(singlyList.transverse())
