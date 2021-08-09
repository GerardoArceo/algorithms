import { SinglyList, SinglyListNode } from './2.0';

class SinglyList2<T> extends SinglyList<T> {
    returnKthToLast(k: number): SinglyListNode<T> {
        if (!this.head) return null

        let listSize = 1
        let currentNode = this.head
        while (currentNode.next) {
            listSize++
            currentNode = currentNode.next
        }

        if (k >= listSize) return null

        currentNode = this.head
        for (let i = 1; i < listSize - k; i++) {
            currentNode = currentNode.next
        }
        
        return currentNode
    }

    returnKthToLastRecursive(node: SinglyListNode<T>, k: number): { nodeResponse: SinglyListNode<T>, distanceToLastElement: number } {
        if (!node) node = this.head

        let distanceToLastElement = 0
        let nodeResponse = null
        if (node.next) {
            const recursiveResponse = this.returnKthToLastRecursive(node.next, k)
            distanceToLastElement = recursiveResponse.distanceToLastElement + 1
            nodeResponse = recursiveResponse.nodeResponse
        }

        if (distanceToLastElement === k) nodeResponse = node

        return {nodeResponse, distanceToLastElement}
    }

    returnKthToLast2(k: number): SinglyListNode<T> {
        if (!this.head) return null

        let p1 = this.head
        let p2 = this.head

        for (let i = 0; i < k; i++) {
            p1 = p1.next
            if (!p1) return
        }

        while (p1.next) {
            p1 = p1.next
            p2 = p2.next
        }

        return p2
    }
}

const singlyList = new SinglyList2<number>();
singlyList.insertAtEnd(2);
singlyList.insertAtEnd(3);
singlyList.insertAtEnd(5);
singlyList.insertAtEnd(7);
singlyList.insertAtEnd(2);
singlyList.insertAtEnd(11);
singlyList.insertAtEnd(13);
singlyList.insertAtEnd(5);
console.log(singlyList.returnKthToLast(4).data)
console.log(singlyList.returnKthToLastRecursive(null, 4).nodeResponse.data)
console.log(singlyList.returnKthToLast2(4).data)
