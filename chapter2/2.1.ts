import { DoubleList, SinglyList } from './2.0';

class DoubleList1<T> extends DoubleList<T> {
    removeDups() {
        let seen = new Set<T>()
        let currentNode = this.head
        while (currentNode) {
            if (seen.has(currentNode.data)) {
                this.removeNode(currentNode)
            } else {
                seen.add(currentNode.data)
            }
            currentNode = currentNode.next
        }
    }

    removeDups2() {
        let currentNode = this.head
        while (currentNode) {
            let currentNode2 = currentNode.next
            while (currentNode2) {
                if (currentNode.data === currentNode2.data) {
                    this.removeNode(currentNode2)
                }
                currentNode2 = currentNode2.next
            }
            currentNode = currentNode.next
        }
    }
}

class SinglyList1<T> extends SinglyList<T> {
    removeDups() {
        let seen = new Set<T>()
        let currentNode = this.head
        while (currentNode) {
            if (seen.has(currentNode.data)) {
                this.removeNode(currentNode)
            } else {
                seen.add(currentNode.data)
            }
            currentNode = currentNode.next
        }
    }

    removeDups2() {
        let currentNode = this.head
        while (currentNode) {
            let currentNode2 = currentNode.next
            while (currentNode2) {
                if (currentNode.data === currentNode2.data) {
                    this.removeNode(currentNode2)
                }
                currentNode2 = currentNode2.next
            }
            currentNode = currentNode.next
        }
    }
}

const doubleList = new DoubleList1<number>();
doubleList.insertAtEnd(2);
doubleList.insertAtEnd(3);
doubleList.insertAtEnd(5);
doubleList.insertAtEnd(7);
doubleList.insertAtEnd(2);
doubleList.insertAtEnd(11);
doubleList.insertAtEnd(13);
doubleList.insertAtEnd(5);
doubleList.removeDups2()
console.log(doubleList.transverse())

const singlyList = new SinglyList1<number>();
singlyList.insertAtEnd(2);
singlyList.insertAtEnd(3);
singlyList.insertAtEnd(5);
singlyList.insertAtEnd(7);
singlyList.insertAtEnd(2);
singlyList.insertAtEnd(11);
singlyList.insertAtEnd(13);
singlyList.insertAtEnd(5);
singlyList.removeDups2()
console.log(singlyList.transverse())
