// Function to perform jump search
function jumpSearch(arr, target) {
    const length = arr.length;
    const step = Math.floor(Math.sqrt(length)); 
    let prev = 0; 
    while (arr[Math.min(step, length) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(length));
        if (prev >= length) {
            return -1; 
        }
    }
    for (let i = prev; i < Math.min(step, length); i++) {
        if (arr[i] === target) {
            return i; 
        }
    }

    return -1; 
}

const numbers = [1, 2, 3, 5, 7, 8, 10, 12, 14]; 
const target = 10
const index = jumpSearch(numbers, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
