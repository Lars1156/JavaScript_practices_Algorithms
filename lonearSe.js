// Function to perform linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1;
}

// In Linar Search algorithm is also used to the perfrom the Opration on the sorted Array.
// But they will be serach the traget value with the bigniing of the array.
const numbers = [1, 3, 2, 5, 7, 8];
const target = 5;
const index = linearSearch(numbers, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
