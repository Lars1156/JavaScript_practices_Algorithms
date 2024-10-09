function flattenArray (arr){
    return arr.reduce((flate , toFlatten)=>{
        return flate.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten): toFlatten); 
    }, [])
}

function bubbleSort(arr){
    let n  = arr.length;
    let swapped
    do{
        swapped = false 
        for(let i= 0; i<= n-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i]= arr[i+1];
                arr[i+1] = temp
                swapped = true
            }
        }
        n--
    }
    while(swapped);
    return arr;
}
function sortNestedArray(arr){
    let flattendArray = flattenArray(arr)
    let sortedArray = bubbleSort(flattendArray);
    return sortedArray;
}
const nestedArray = [2,4,[6,7,1,5,10],9,11,0,12];
const result = sortNestedArray(nestedArray);
console.log("Sorted Array is : ", result);
