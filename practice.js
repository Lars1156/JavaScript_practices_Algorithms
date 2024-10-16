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

  