// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// METHOD #1

// const anagrams = (stringA, stringB) => {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// };

// const buildCharMap = str => {
//   str = str.toLowerCase();
//   str = str.replace(/[^a-zA-Z0-9]/g, "");

//   const charMap = {};

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   return charMap;
// };

// METHOD #2

const anagrams = (stringA, stringB) => {
  stringA = removeChar(stringA);
  stringB = removeChar(stringB);

  return stringA === stringB;
};

const removeChar = str => {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str
    .split("")
    .sort()
    .join("");
  return str;
};

module.exports = anagrams;
