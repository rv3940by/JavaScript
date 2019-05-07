const numArr = [2, 3, 4, 2, 4, 5, 6, 2]; // Initialize numArr with some numbers inside it

countOccurences = (arr, num) => {
  let count = 0; // initalize count as zero

  // loop through the giving array and check if number exist
  // if exist increment count by 1 otherwise return 0
  arr.forEach(index => (index == num ? count++ : 0));

  // if count is greater than or equal to 1 then return the number and it occurrences
  // Otherwise return the number and a string saying the number is not in the array
  return count >= 1
    ? `${num} -- ${count} times`
    : `${num} does not appear to be in the array.`;
};

/* End Of countOccurences function / Start of testing countOccurences function */

console.log(countOccurences(numArr, 2));
console.log(countOccurences(numArr, 4));
console.log(countOccurences(numArr, 10));
console.log(countOccurences(numArr, 7));

/* End Of testing countOccurrence function */
