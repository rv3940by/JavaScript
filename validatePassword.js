/* 
    A simple JavaScript program to validate password.
    Author: Leng Yang
    Date: 12/27/2018
    Time: 3:45PM
*/

//  A function to check if the input string is a valid password or not
function isPasswordValid(input) {
  if (hasCapitalLetter(input)) {
    console.log("Upper-case is valid.");
  } else if (!hasCapitalLetter(input)) {
    console.log("Password needs a capital letter.");
  }
  if (hasLowerCaseLetter(input)) {
    console.log("Lower-case is valid.");
  } else if (!hasLowerCaseLetter(input)) {
    console.log("Password needs a lower-case letter.");
  }
  if (hasSpecialCharacter(input)) {
    console.log("Sepcial character is valid.");
  } else if (!hasSpecialCharacter(input)) {
    console.log("Password needs a special character.");
  }
  if (hasNumber(input)) {
    console.log("Number is valid.");
  } else if (!hasNumber(input)) {
    console.log("Password needs a number or digit.");
  }
}

// A function to check if the input string has a capital-case letter
function hasCapitalLetter(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}

// A function to check if the input string has a lower-case letter
function hasLowerCaseLetter(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

//  A function to check if input string contains a special character
function hasSpecialCharacter(input) {
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacter.length; j++) {
      if (input[i] === specialCharacter[j]) {
        return true;
      }
    }
  }
}

// A function to check if input string contain a number
function hasNumber(input) {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (input[i] === numbers[j]) {
        return true;
      }
    }
  }
}

console.log("*****************Testing (password)*****************");
//  Testing upper-case
isPasswordValid("password");

console.log("*****************Testing (PASSWORD)*****************");
//  Testing lower-case
isPasswordValid("PASSWORD");

console.log("*****************Testing (P@ssw0rd)*****************");
//  Testing the correct password
isPasswordValid("P@ssw0rd");
