class ListNode{
    constructor(value){
        this. value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
}
    print() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

function splitList(head){
    let slow = head;
    let fast = head;
    let pre = null;
    while(fast && fast.next){
        pre  = slow ;
        slow = slow.next;
        fast =  fast.next.next
    }
    if (pre) {
        pre.next = null;
    }
    return [head, slow]; 
}
function merge(left, right) {
    if (!left) return right;
    if (!right) return left;

    if (left.value < right.value) {
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}
function mergeSort(head) {
    if (!head || !head.next) {
        return head; 
    }

    const [left, right] = splitList(head);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

const linkedList = new LinkedList();
const values = [11, 1, 10, 2, 3, 5, 6, 7, 8, 9, 23, 15, 13];
values.forEach(value => linkedList.append(value));

console.log("Original Linked List:");
linkedList.print();
linkedList.head = mergeSort(linkedList.head);

console.log("Sorted Linked List using Merge Sort:");
linkedList.print();