mutation = arr => {
  let isEqual = false; // Init isEqual to false

  let firstIndex = arr[0].split(""); // split the string in first index of arr and append to firstIndex

  let secondIndex = arr[1].split(""); // split the string in second index of arr and append to secondIndex

  // map through both arrays and change each letter to lowercase
  firstIndex = firstIndex.map(letter => letter.toLowerCase());
  secondIndex = secondIndex.map(letter => letter.toLowerCase());

  for (let i = 0; i < secondIndex.length; i++) {
    // check if firstIndex includes the value of the current index
    if (firstIndex.includes(secondIndex[i])) {
      isEqual = true; // Set isEqual to true
    } else {
      isEqual = false; // Set isEqual to false
      break; // Break out of the loop
    }
  }

  return isEqual; // return isEqual ot
};

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
