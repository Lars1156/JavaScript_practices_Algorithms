function reverserArray (arr){
    let reversedArray = [];
    let evenNum = [];
    let oddNum = [];
    for(let i = arr.length-1 ; i>= 0 ; i--){
        reversedArray.push(arr[i]);
        if (arr[i] % 2 ===0) {
              evenNum.push(arr[i])
        } else {
            oddNum.push(arr[i]);
        }
    }
    return{
        reversedArray:reversedArray,
        evenNum:evenNum,
        oddNum:oddNum
    }

}
const numbers = [1, 2, 3, 4, 5, 6];
const result = reverserArray(numbers);

console.log("Reversed Array ", result.reversedArray);
console.log("Even Number" , result.evenNum);
console.log("Odd Number", result.oddNum);


