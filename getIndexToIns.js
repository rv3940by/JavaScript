getIndexToIns = (arr, num) => {
  //  Sort array from least to greatest
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    // if the value of current index in arr is greater or equal to num
    if (arr[i] >= num) {
      // return the index
      return i;
    }
  }
  // return the length of the arr
  return arr.length;
};

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([], 1)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
