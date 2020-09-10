// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  //method #1
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");
  //method #2
  //   let reversed = "";
  //   for (let character of str) {
  //     reversed = character + reversed;
  //   }
  //   return reversed;
  //method #3
  //   return str.split("").reduce((reverse, character) => character + reverse, "");
};

module.exports = reverse;
