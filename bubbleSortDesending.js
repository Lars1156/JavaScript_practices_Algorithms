function bubbleSortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function processNestedArray(arr) {
    const flatArray = [];
    const evenNumbers = [];
    const oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const sortedSubArray = bubbleSortDescending(arr[i]);
            flatArray.push(...sortedSubArray);
        } else {
            flatArray.push(arr[i]);
        }
    }
    const sortedArray = bubbleSortDescending(flatArray);
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] % 2 === 0) {
            evenNumbers.push(sortedArray[i]);
        } else {
            oddNumbers.push(sortedArray[i]);
        }
    }

   
    const secondLargestEven = evenNumbers.length >= 2 ? evenNumbers[1] : null;

    const secondLargestOdd = oddNumbers.length >= 2 ? oddNumbers[1] : null;

    const sumEvenNumbers = evenNumbers.reduce((sum, num) => sum + num, 0);

    const sumOddNumbers = oddNumbers.reduce((sum, num) => sum + num, 0);

    return {
        sortedArray: sortedArray,
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers,
        secondLargestEven: secondLargestEven,
        secondLargestOdd: secondLargestOdd,
        sumEvenNumbers: sumEvenNumbers,
        sumOddNumbers: sumOddNumbers
    };
}
const nestedArray = [[13, 11, 4], 2, 3, [9, 7, 6], 15, 10];

const result = processNestedArray(nestedArray);

console.log("Sorted Array (Descending):", result.sortedArray);
console.log("Even Numbers (Descending):", result.evenNumbers);
console.log("Odd Numbers (Descending):", result.oddNumbers);
console.log("Second Largest Even Number:", result.secondLargestEven);
console.log("Second Largest Odd Number:", result.secondLargestOdd);
console.log("Sum of Even Numbers:", result.sumEvenNumbers);
console.log("Sum of Odd Numbers:", result.sumOddNumbers);
