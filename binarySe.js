function binarySearch(arr,target){
    let low = 0;
    let high = arr.length-1
    while(low<=high){
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid];
        if (midValue===target) {
            return mid;
        }else if(midValue<target){
            low = mid+1;
        }else{
            high =mid-1;
        }
    }
    return -1
}
// Binary Search is perfromed only the sorted data, they will print the target value and
// index number of target value.
const numbers = [11,3,1,67,5,6];
numbers.sort((a,b)=>a-b);
console.log("Sorted Array: ", numbers);

const target = 1;
const index = binarySearch(numbers,target);
if(index != -1){
    console.log(`Target ${target} found at index ${index}.`);    
}else{
    console.log(`Target ${target} not found in the array.`);
}
