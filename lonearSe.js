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
// Linear search is a simple searching algorithm that checks each element in a list or array one by one until it finds the target element or reaches the end of the list. It does not require the array to be sorted, unlike binary search.
const numbers = [1, 3, 2, 5, 7, 8];
const target = 5;
const index = linearSearch(numbers, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}

// Find the User  from array object using Find()

const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Emily Johnson', age: 22 }
];
const targetId = 2;
const user = users.find(user=>user.id === targetId);
if (user) {
    console.log('User found:', user);
} else {
    console.log('User not found');
}