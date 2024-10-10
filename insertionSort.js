function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [11, 1, 10, 2, 3, [5, 6, 7], 8, 9, [23, 15, 13]];

console.log("Before sorting:");
console.log(arr);

let flatArray = flattenArray(arr);
let sortedArray = insertionSort(flatArray);

console.log("After sorting:");
console.log(sortedArray);
