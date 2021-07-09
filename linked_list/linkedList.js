/*
What is a Linked List?

A linked list is a linear data structure similar to an array. However, unlike arrays, 
elements are not stored in a particular memory location or index. Rather each element is a 
separate object that contains a pointer or a link to the next object in that list.  

Types of linked lists:
- Singly Linked Lists: Each node contains only one pointer to the next node. 
-Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
-Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

*/

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    clear() {
        this.head = null
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head
    }
}
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.getLast());