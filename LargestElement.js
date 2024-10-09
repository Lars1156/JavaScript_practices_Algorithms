// Function to find the largest element in a nested array
function findLargestInNestedArray(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] > largest) {
            largest = arr[i][j];
          }
        }
      } else {
        if (arr[i] > largest) {
          largest = arr[i];
        }
      }
    }
  
    return largest;
  }
  const nestedArray = [3, [6, 2], [9, 12, 5], 8, [1, 14, 7]];
  const largestElement = findLargestInNestedArray(nestedArray);
  console.log("The largest element is:", largestElement);
  