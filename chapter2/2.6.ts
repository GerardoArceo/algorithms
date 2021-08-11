import { SinglyList, SinglyListNode } from './2.0';

class SinglyList6<T> extends SinglyList<T> {
    isPalindrome1 = () => {
        const array = this.transverse()
        for (let i = 0; i < Math.floor(array.length/2); i++) {
            const p1 = array[i];
            const p2 = array[array.length - 1 - i];
            if (p1 !== p2) return false;
        }
        return true
    }

    isPalindrome2 = () => {
        const stack = []
        let slow = this.head;
        let fast = this.head;
        let oddLength = true;
        while (fast.next) {
            stack.push(slow.data);
            slow = slow.next
            fast = fast.next
            if (fast.next) fast = fast.next
            else oddLength = false
        }
        if (oddLength) slow = slow.next

        while (slow) {
            if (stack.pop() !== slow.data) return false
            slow = slow.next
        }
        return true
    }
    
    isPalindromeRecursive1 = (node: SinglyListNode<T> = this.head, index: number = 0, hash = {})
    : {reverseIndex: number, result: Boolean} => {
        hash[index] = node.data
        if (node.next) {
            const recursiveCall = this.isPalindromeRecursive1(node.next, index + 1, hash)
            const reverseIndex = recursiveCall.reverseIndex + 1
            const result = recursiveCall.result && (hash[index] == hash[reverseIndex])
            return {reverseIndex, result}
        } else {
            return {reverseIndex: 0, result: true}
        }
    }

    isPalindromeRecursive2 = (length: number, p1 = this.head): {result: boolean, p2: SinglyListNode<T>} => {
        if (length > 1) {
            const recursiveCall = this.isPalindromeRecursive2(length - 2, p1.next) 
            const p2 = recursiveCall.p2
            const result = recursiveCall.result && (p1.data == p2.data)
            return {result, p2: p2.next}
        } else {
            const p2 = length === 0 ? p1 : p1.next
            return {result: true, p2}
        }
    }
}

const list1 = new SinglyList6<number>();
list1.insertAtEnd(9);
list1.insertAtEnd(3);
list1.insertAtEnd(7);
list1.insertAtEnd(1);
list1.insertAtEnd(9);

const list2 = new SinglyList6<number>();
list2.insertAtEnd(1);
list2.insertAtEnd(2);
list2.insertAtEnd(3);
list2.insertAtEnd(4);
list2.insertAtEnd(4);
list2.insertAtEnd(3);
list2.insertAtEnd(2);
list2.insertAtEnd(1);

console.log(list1.isPalindrome1())
console.log(list2.isPalindrome1())
console.log(list1.isPalindrome2())
console.log(list2.isPalindrome2())
console.log(list1.isPalindromeRecursive1().result)
console.log(list2.isPalindromeRecursive1().result)
console.log(list1.isPalindromeRecursive2(list1.getLength()).result)
console.log(list2.isPalindromeRecursive2(list2.getLength()).result)
