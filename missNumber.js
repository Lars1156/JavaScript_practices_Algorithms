function findMissingNumber(arr, n) {
    
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

   
    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5,6]; 
const n = 7; 
console.log(findMissingNumber(arr, n)); // Output: 3


// Sort the Array Object By the age 
const people = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 22 },
    { name: 'Mike', age: 32 },
    { name: 'Chris', age: 28 }
];

function bubbleSort(arr){
    let n = arr.length

    for(let i = 0 ; i<n-1; i++){
        for(let j = 0; j<n-i-1; j++){
            if (arr[j].age>arr[j+1].age) {
                let temp = arr[j];
                arr[j+1] = arr[j];
                temp = arr[j+1];
            }
        }
    }
}
bubbleSort(people);
console.log(people);

// Developed the tree and perfrom the  bsf and dsf on the node

class treeNode{
    constructor(value){
        this.value= value;
        this.children = [];
    }
      addChild(childNode) {
        this.children.push(childNode);
    }
}

 class Tree{
    constructor(rootNode){
        this.root = new treeNode(rootNode)
    }
    dfs(node = this.root) {
        console.log(node.value); 
        for (const child of node.children) {
            this.dfs(child); 
        }
    }
    bsf(){
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift(); 
            console.log(node.value);
            queue.push(...node.children);
        }
 
    }
}   
const myTree = new Tree('Root');
const child1 = new treeNode('Child 1');
const child2 = new treeNode('Child 2');

myTree.root.addChild(new treeNode('GrandChild 1'));
myTree.root.addChild(new treeNode('Grand Child 2'));
myTree.root.addChild(new treeNode('GrandChild 3'));

console.log('Depth-First Search (DFS):');
myTree.dfs();

console.log('Breadth-First Search (BFS):');
myTree.bsf();

// Develpoed the Queue And Perfromed the all opration it 
class NumberQueue{
    constructor(numbers = []){
        this.item = [];
        this.enqueArray (numbers) 
    }
    enque(number){
        if (typeof number === 'number') {
            this.item.push(number)
            console.log(`${number} add the number queue`);           
        }else{
            console.log('Plese enter the vaild Number of enquee');          
        }
    }
    enqueArray(numbers){
        numbers.forEach(number => this.enque(number));
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty, cannot dequeue.');
            return null;
        }
        const removedItem = this.item.shift(); 
        console.log(`${removedItem} removed from the queue.`);
        return removedItem; 
    }
    peek(){
        if (this.isEmpty()) {
            console.log('Queue is Emapty');
            return null
        }
        return this.item[0];
    }
    isEmpty() {
        return this.item.length === 0; 
    }
    size() {
        return this.item.length;
    }

    display() {
        if (this.isEmpty()) {
            console.log('Queue is empty.');
            return;
        }
        console.log('Queue contents:', this.item.join(' <- '));
    }

}
const initialNumbers = [10, 20, 30, 40]; 
const numberQueue = new NumberQueue(initialNumbers);
numberQueue.display();
console.log('Fronte of the Queue: ', numberQueue.peek());
numberQueue.dequeue();
numberQueue.dequeue();
numberQueue.display();
console.log('Size of the Queue', numberQueue.size());
numberQueue.dequeue(50);
numberQueue.display();