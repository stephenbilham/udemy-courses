// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  // Original for loop
  //   for (let i = 0; i < str.length; i++) {
  //     charMap[str[i]] = charMap[str[i]] + 1 || 1;

  // if you dont use the or || it's undefined + 1 which equals null so originally if it doesnt exist you need to set the first case to 1
  //   }

  //new loop
  for (let char of str) {
    charMap[char] = charMap[char]++ || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
