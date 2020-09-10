import { builtinModules } from "module";

// ES6

// const squareArrow = num => {
//   return num * num;
// };

// const squareArrow = x => x * x; // function expression no return and no { }

// console.log(squareArrow(6));

//challenge - use arrow functions

// const getFirstName = fullName => {
//   return fullName.split(" ")[0];
// };
// console.log(getFirstName("Matt Barr"));

// const getFirstName = fn => fn.split(" ")[0];
// console.log(getFirstName("Matt Barr"));

// ES6 arrow function 2 //

//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
};
console.log(add(45, 3));
// this keyword - no longer bound

const user = {
  name: "steve",
  cities: ["LA", "SF", "NY"],
  printPlacesLived() {
    return this.cities.map(city => `${this.name} has lived in ${city}`);
  }
};

console.log(user.printPlacesLived());

//challenge
//make obj w data method that access data use map to access

const multipler = {
  //numbers - arr of nubmers
  num: [5, 2, 8, 13],
  //multiplyBy by single number
  multBy: 10,
  //multiply - new arr num been multiplied
  multiply() {
    const newNum = this.num.map(num => {
      console.log(`the new number is: ${num} * ${this.multBy} `);
    });
    return newNum;
  }
};

multipler.multiply();
