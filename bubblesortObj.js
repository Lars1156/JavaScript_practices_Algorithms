// Bubble sort function for sorting an array of objects
function bubbleSort(arr, key) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j][key] > arr[j + 1][key]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
];

console.log("Before sorting by age:");
console.log(people);

bubbleSort(people, 'age');

console.log("After sorting by age:");
console.log(people);
bubbleSort(people, 'name');

console.log("After sorting by name:");
console.log(people);
