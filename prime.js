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
// Lahest Nmber using the 
function largestNum(arr){
    if (arr.length===0) {
        return 'Largest Number of the Array '
    }
    let largest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if (arr[i]>largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("Largest number:", largestNum(number)); 
// Find the Missing Number of Value 

function missingNumber (arr, n ){
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
const arr = [1, 2, 4, 5, 6];
const n = 6;
console.log("Missing number:", missingNumber(arr, n));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

rl.question('Enter a string to count the vowels: ', (inputString) => {
    console.log("Number of vowels:", countVowels(inputString));

    rl.close();
});
// String Plalindrom or not
function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

rl.question('Enter a string to check if it is a palindrome: ', (inputString) => {
    console.log("Is palindrome:", isPalindrome(inputString));

    rl.close();
});
