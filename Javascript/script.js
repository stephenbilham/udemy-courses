/*

// function constructor

var john = {
  name: "john",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//inherantence in practice proto

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = "smith";

// new is a empty object
var john = new Person("john", 1990, "teacher");
var jane = new Person("jane", 1969, "designer");
var mark = new Person("mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

//object.create

/*

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});

*/

// primitives vs objects.

/*

// primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects

var obj1 = {
  name: "john",
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 27;
var obj = {
  name: "stephen",
  city: "Pb"
};

function change(a, b) {
  a = 30;
  b.city = "san fran";
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

////////////////////////

// passing functions as arugments

/*

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var HeartRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(HeartRate);

*/

// functions returning fuctions

/*

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + " can you please explain what ux design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("what subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("hello " + name + " what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
var otherQuestion = interviewQuestion("butler");
teacherQuestion("john");
designerQuestion("randy");
otherQuestion("bob");

interviewQuestion("teacher")("mark");

*/

// IIFE
/*

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

*/
/*

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

*/

// Closures

/* 

function retirement(retirementAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

*/
