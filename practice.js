const arr = [1,2,3];
const arr1 = [2,3,4];
const arr2 = [6,7,8];

const combinedArray = [...arr,...arr1,...arr2];
console.log(combinedArray);

// reverse the first threee letter in string
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a string: ', function(input) {
    function reverseFirstThree(str) {
      if (str.length < 3) {
        return str.split('').reverse().join(''); 
      }
  
      const firstThreeReversed = str.slice(0, 3).split('').reverse().join('');
      const restOfString = str.slice(3);
  
      return firstThreeReversed + restOfString;
    }
    const output = reverseFirstThree(input);
    console.log('Output:', output);
  
    rl.close();
  });


  // 3D Array Example
let array3D = [
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [7, 8, 9],
      [10, 11, 12]
    ]
  ];
  
  // Function to display the 3D array
  function display3DArray(arr) {
    arr.forEach((layer, index) => {
      console.log(`Layer ${index + 1}:`);
      layer.forEach(row => {
        console.log(row.join(' '));  
      });
      console.log('\n');  
    });
  }
  
  display3DArray(array3D);
  

  function isArmstrongNumber(num) {
    let sum = 0;
    const digits = num.toString().split('');
    const numDigits = digits.length;

    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), numDigits);
    }

    return sum === num;
}

function findArmstrongNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isArmstrongNumber(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example array
const numbers = [153, 370, 371, 9474, 9475, 123];
const armstrongNumbers = findArmstrongNumbers(numbers);

console.log("Armstrong numbers:", armstrongNumbers);
