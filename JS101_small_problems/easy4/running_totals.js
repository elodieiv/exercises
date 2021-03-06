function runningTotal(arr) {
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] += currentSum;
    currentSum += arr[i];
  }
  return arr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
