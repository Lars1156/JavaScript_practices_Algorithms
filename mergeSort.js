function flattenArrayWithLoop(arr) {
    let flatArray = [];


    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
         
            for (let j = 0; j < arr[i].length; j++) {
                flatArray.push(arr[i][j]);
            }
        } else {
           
            flatArray.push(arr[i]);
        }
    }

    return flatArray;
}


function merge(left, right) {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

  
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;  
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));   
    const right = mergeSort(arr.slice(mid));       

    return merge(left, right);  
}


let nestedArr = [11, 1, 10, 2, 3, [5, 6, 7], 8, 9, [23, 15, 13]];


let flatArray = flattenArrayWithLoop(nestedArr);
console.log("Flattened Array:", flatArray);


let sortedArray = mergeSort(flatArray);
console.log("Sorted Array using Merge Sort:", sortedArray);
