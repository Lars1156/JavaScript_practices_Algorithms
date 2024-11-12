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




