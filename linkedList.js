class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}
class LinkedList {
    constructor() {
        this.head = null; 
    }
    append(value) {
        const newNode = new Node(value);
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
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
    bubbleSort() {
        if (!this.head || !this.head.next) {
            return; 
        }

        let swapped;
        do {
            swapped = false;
            let current = this.head;

            while (current && current.next) {
                if (current.value > current.next.value) {
                    const temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    swapped = true; 
                }
                current = current.next;
            }
        } while (swapped); 
    }
}
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function sortNestedArray(nestedArray) {
    const flattenedArray = flattenArray(nestedArray);
    return bubbleSort(flattenedArray);
}

const nestedStrings = [['banana', 'apple'], ['orange', 'grape'], ['kiwi']];
console.log("Nested String Array Before Sorting:");
console.log(nestedStrings);

const sortedStrings = sortNestedArray(nestedStrings);
console.log("Nested String Array After Sorting:");
console.log(sortedStrings);
const linkedList = new LinkedList();
linkedList.append(4);
linkedList.append(1);
linkedList.append(3);
linkedList.append(2);

console.log("Linked List Before Sorting:");
linkedList.print();

linkedList.bubbleSort();

console.log("Linked List After Sorting:");
linkedList.print(); 
