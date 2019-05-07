printStarsPerLine = num => {
  const star = "*"; //  Initialize star as *
  const space = " "; //  Initialize space as a space
  let output = ""; //  Initialize output as an empty string
  let count = num; //  Initialize count to the same value as num

  for (let i = 1; i <= num; i++) {
    output +=
      // if i does not equal to num
      i !== num
        ? // repeat the amount of space by the value of count times following by a star, space,
          // then repeat star and space again by the value of i times and a nextline
          `${space.repeat(count)}` + `${star}${space}`.repeat(i) + "\n"
        : // otherwise assign a space follorwing by a star, space, and repeat star and space
          // by the value of num times
          space + `${star}${space}`.repeat(num);

    count--; // decrement count by 1
  }

  return output; // return output
};

/* End of printStarsPerLine function / Start of Testing printStarsPerLine function */

console.log(printStarsPerLine(3));
console.log(printStarsPerLine(5));
console.log(printStarsPerLine(25));

/* End of testing printStarsPerLine function */
