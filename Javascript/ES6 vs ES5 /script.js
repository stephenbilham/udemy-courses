// lecture: arrow functions 2

// ES5
/*
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this; // pass it down to next so you can use this for ^^ in the next function (not needed in es6!)
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "this is box number " +
        self.position +
        " and it is " +
        self.color +
        ".";
      alert(str);
    });
  }
};

box5.clickMe();

*/

// ES6
/*
const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "this is box number " +
        this.position +
        " and it is " +
        this.color +
        ".";
      alert(str);
    });
  }
};

box6.clickMe();
*/

// ES6
/*
// this says undefined because again becasue of line 52(click me) since the anonymous function is an arrow it shares it with the global this. so position and color are not a thing. The one above, we only share the lexical scope with the second function so it can have the this. of the obj

const box6 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "this is box number " +
        this.position +
        " and it is " +
        this.color +
        ".";
      alert(str);
    });
  }
};

box6.clickMe();
*/

// function Person(name) {
//   this.name = name;
// }

/*
//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["bob", "jane", "rob"];
new Person("john").myFriends5(friends);
*/

//ES6
/*
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

var friends = ["bob", "jane", "rob"];
new Person("robbert").myFriends6(friends);
*/

//Lecture: Destructuring

//ES5
// var john = ["John", 26];
// var name = john[0];
// var age = john[1];

//ES6
/*
const [name, year] = ["John", 26];
console.log(name);
console.log(year);

const obj = {
  firstName: "Stephen",
  lastName: "Bilham"
};

const { firstName, lastName } = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b } = obj;
console.log(a, b);
*/

/*
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/

// Lecture: Arrays;

// const boxes = document.querySelectorAll(".box");

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes); // hack not entirely sure how this works
console.log(boxesArr5);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});
console.log(boxesArr5);
*/

//ES6
// const boxesArr6 = Array.from(boxes); // needed for es6
// Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));
// console.log(boxes); //node list to array

// ES5
/*
for (i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
    //break; would stop after first box changes?
  }
  boxesArr5[i].textContent = "I changed to blue";
}
*/
/*
//ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "i changed to blue!";
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

full = ages.map(function(el) {
  return el >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

//Lecture: Spread Operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 21, 12);
console.log(sum1);

// ES5
var ages = [12, 32, 14, 41];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["john", "dale", "mac"];
const familyMiller = ["max", "bart", "conner"];
const bigFamily = [...familySmith, "lily", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes2 = document.querySelectorAll(".box");
const all = [h, ...boxes2];

Array.from(all).forEach(cur => (cur.style.color = "purple"));
*/

// Lecture: Rest Parameters
/*
//ES5
function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
const isFullAge6 = (...years) => {
  years.forEach(cur => console.log(2016 - cur >= 18));
};

isFullAge6(1990, 2003, 1976, 2003);
*/

//ES5
/*
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  console.log(argsArr);
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= limit);
  });
}
isFullAge5(16, 1990, 1999, 1965);
*/

//ES6
/*
const isFullAge6 = (limit, ...years) => {
  years.forEach(cur => console.log(2016 - cur >= limit));
};

isFullAge6(21, 1990, 2003, 1976, 2003);
*/
// Lecture: default parameters

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "american")
    : (nationality = nationality);

  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson("john", 1990);
console.log(john);

var emily = new SmithPerson("emily", 1983, "diaz", "spanish");
console.log(emily);
*/

//ES6
/*
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "smith", // default peram
  nationality = "american" // defualt peram
) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson("john", 1990);
console.log(john);

var emily = new SmithPerson("emily", 1983, "Diaz", "spanish"); // override easier 
console.log(emily);
*/

// lecture: classes

/*
//ES5
//function constructor
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function(age) {
  var age = (new Date().getFullYear = this.yearOfBirth);
  console.log(age);
};

var John5 = new Person5("john", 1990, "teacher");

// es6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = (new Date().getFullYear = this.yearOfBirth);
    console.log(age);
  }
  static greeting() {
    console.log("hey there");
  }
}

const john6 = new Person6("john", 1990, "teacher");

Person6.greeting();
*/

// Classes and inherentance

//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function(age) {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicMedals, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicMedals = olympicMedals;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("john", 1990, "swimmer", 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/

/*
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedals() {
    this.medals++;
    console.log(this.medals);
  }
}

const athleteSteve6 = new Athlete6("steve", 1993, "surfer", 5, 4);

athleteSteve6.wonMedals();
athleteSteve6.calculateAge();
*/

// FINAL QUIZ!!!!! lecture 117 for question

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, numTrees, area) {
    super(name, buildYear);
    this.numTrees = numTrees;
    this.area = area; //km
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    let classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )}`
    );
  }
}

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum % arr.length];
}

const allParks = [
  new Park("Green park", 1890, 730, 2.6),
  new Park("Blue park", 1010, 1240, 3.6),
  new Park("Red park", 2000, 120, 1.6)
];

const allStreets = [
  new Street("Green street", 2010, 1.6, 2),
  new Street("Blue street", 2001, 3.5, 3),
  new Street("Red street", 1992, 0.6, 1),
  new Street("Gold street", 1010, 4.6, 5)
];

function reportPark(p) {
  console.log("------park Report------");
  // density
  p.forEach(element => {
    element.treeDensity();
  });

  // average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, aveAge] = calc(ages);
  console.log(`our ${p.length} parks have an average of ${aveAge} years.`);

  // more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log("------park Report------");

  //total and ave length of town streets
  const [totalLength, aveLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${aveLength} km`
  );

  //classify sizes
  s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreets(allStreets);
