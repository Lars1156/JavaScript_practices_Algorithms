function isPrime(num){
    if(num<=1 ) return false;
    if(num<=3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

const array  = [2,3,4,5,6,7,8,9,11,12];
const result = array.filter(isPrime);
console.log("**Prime Number" , result);

// Even and Odd Number
const numbers = [1,2,3,4,5,6,7,8,9,10];

function evenNum(num){
    return num % 2 === 0;
}

function oddNum(num){
    return num%2 !== 0;
}

const evenNumbers = numbers.filter(evenNum);
const oddNumbers = numbers.filter(oddNum);

console.log("even Numbers" , evenNumbers);
console.log(" Odd Numbers" , oddNumbers);
// Using For Loop 
let evenNumber = [];
let oddNumber = [];

for(let i = 0 ; i< numbers.length; i++){
    if(numbers[i]%2 === 0){
        evenNumber.push(numbers[i]);
    }else{
        oddNumber.push(numbers[i]);
    }
}

console.log("**Even Numbers" , evenNumber);
console.log("**Odd Numbers" , oddNumber);


// Secound Largest Numbers In Array 
function largestNumber(arr){
    if (arr.length<2) {
        return 'Array must have at least two elements'
    }
    let largest = -Infinity;
    let secoundLargest = -Infinity;
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i]>largest){
            secoundLargest = largest;
            largest = arr[i]
        }else if (arr[i] > secoundLargest && arr[i] !== largest) {
            secoundLargest = arr[i];
        }
    }
    if (secoundLargest === -Infinity) {
        return "There is no second largest number (all elements may be equal).";
    }

    return secoundLargest;
}

const number = [10, 5, 20, 15, 20, 5];
console.log("Second largest number:",largestNumber(number));


