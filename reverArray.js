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

function findSecondLargest(arr) {
    if (arr.length < 2) {
      return null;
    }
  
    let first = -Infinity, second = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
      }
    }
  
    return second === -Infinity ? null : second;
  }
  const number = [2, 3, 1, 5, 3, 6];
  console.log("Secound large Number ",findSecondLargest(number)); 

  function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log("Sum of Array ",  sumOfArray(number));
  
  
  function isPalindrome(str) {
    let cleanedStr = str.toLowerCase();
  
    let length = cleanedStr.length;
    for (let i = 0; i < length / 2; i++) {
      if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
        return false; 
      }
    }
  
    return true;
  }

  const inputString = "Nitin";
  console.log(isPalindrome(inputString)); 
  