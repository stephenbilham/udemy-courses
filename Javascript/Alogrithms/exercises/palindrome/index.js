// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//method #1
// function palindrome(str) {
//   const newStr = str
//     .split("")
//     .reverse()
//     .join("");
//   return newStr === str;
// }

//method #2
const palindrome = str => {
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
};

module.exports = palindrome;
