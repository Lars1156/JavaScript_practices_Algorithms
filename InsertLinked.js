class ListNode{
    constructor(value){
        this .value = value;
        this . next = null; 
    }
}
class LinkedList {
    constructor(){
        this.head = null
    }
    append(value){
        const newNode =  new ListNode(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

insertAtBeginning(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head; 
    this.head = newNode; 
}

insertAtPosition(value, position) {
    const newNode = new ListNode(value);
    if (position === 0) {
        this.insertAtBeginning(value);
        return;
    }

    let current = this.head;
    let prev = null;
    let index = 0;
    while (current && index < position) {
        prev = current;
        current = current.next;
        index++;
    }

    if (prev) {
        prev.next = newNode; 
        newNode.next = current; 
    }
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

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Original Linked List:");
linkedList.print();
linkedList.insertAtBeginning(0);
console.log("After inserting 0 at the beginning:");
linkedList.print();

linkedList.insertAtPosition(1.5, 2);
console.log("After inserting 1.5 at position 2:");
linkedList.print();
linkedList.append(4);
console.log("After inserting 4 at the end:");
linkedList.print();