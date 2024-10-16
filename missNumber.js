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