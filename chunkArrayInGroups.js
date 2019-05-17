/*
    Author: Leng Yang
    Date: 05/17/2019
    @desc: Write a function that splits an array into groups the length of size
    and returns them as a two dimensional array.
*/

chunkArrayInGroups = (arr, size) => {
  let chunkArr = []; // Init chunkArr
  let subArr = []; // Init subArr

  for (let i = 0; i < arr.length; i++) {
    // check if subArr length equal size
    if (subArr.length !== size) {
      // copy what's in subArr and current value to subArr
      subArr = [...subArr, arr[i]];
      //  if i is equal to the last index of arr
      if (i === arr.length - 1) {
        //  push subArr to chunkArr
        chunkArr.push(subArr);
      }
    } else {
      //  Copy chunkArr and subArr to chunkArr
      chunkArr = [...chunkArr, subArr];
      // if i doens't equal the last index of arr
      if (i !== arr.length - 1) {
        subArr = []; // Empty subArr
        subArr = [...subArr, arr[i]]; // Copy what's in subArr and current value to subArr
      } else {
        subArr = []; // Empty subArr
        subArr = [...subArr, arr[i]]; // Copy what's in subArr and current value to subArr
        chunkArr = [...chunkArr, subArr]; // Copy what's in chunkArr and subArr to chunkArr
      }
    }
  }

  return chunkArr; // return chunkArr
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [ ["a", "b"], ["c", "d"] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [ [0, 1, 2], [3, 4, 5] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [ [0, 1], [2, 3], [4, 5] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [ [0, 1, 2, 3], [4, 5] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [ [0, 1, 2], [3, 4, 5], [6] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [ [0, 1, 2, 3], [4, 5, 6, 7], [8] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // [ [0,1], [2, 3], [4, 5], [6, 7], [8] ]
