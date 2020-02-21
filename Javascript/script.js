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
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

// retirement(66)(1990);

*/

/*

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + " can you please explain what ux design is?");
    } else if (job === "teacher") {
      console.log("what subject do you teach, " + name + "?");
    } else {
      console.log("hello " + name + " what do you do?");
    }
  };
}

var interviewQuestionTeacher = interviewQuestion("teacher");
var interviewQuestionDesigner = interviewQuestion("designer");
var interviewQuestionAthlete = interviewQuestion("Athlete");

interviewQuestionTeacher("mark");
interviewQuestionDesigner("bob");
interviewQuestionAthlete("mike");

interviewQuestion("teacher")("mark"); // best no need for storing in variable

*/

///////////////

// Bind, call, and apply -  methods

/*

var steve = {
  name: "steve",
  age: "26",
  job: "coder",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "good " +
          timeOfDay +
          ", Ladies and gentlemen! I am " +
          this.name +
          ", I am a " +
          this.job +
          " I am " +
          this.age +
          " years old."
      );
    } else {
      style === "friendly";
      console.log(
        "good " +
          timeOfDay +
          ", I am " +
          this.name +
          ", I am a " +
          this.job +
          " I am " +
          this.age +
          " years old."
      );
    }
  }
};
var emily = {
  name: "emily",
  age: 35,
  job: "designer"
};

steve.presentation("formal", "morning");
steve.presentation.call(emily, "friendly", "afternoon"); //call
steve.presentation.apply(emily, ["friendly", "afternoon"]); //wont work because arg isnt expecting an array

var steveFriendly = steve.presentation.bind(steve, "friendly"); // preset arguements
steveFriendly("morning");
steveFriendly("night");

var emilyFormal = steve.presentation.bind(emily, "formal");
emilyFormal("afternoon");

*/

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

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, "20"));
// A little tricky, Since arrayCalc cant take in full age by itself due to its two elements you need to preset the first one and set the second one to what you want (limit)
console.log(ages);
console.log(fullJapan);

*/

/////// PROMPT GAME IN CONSOLE.
/* 1-7 !!!!!

(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correctAnswer) {
      console.log("correct Answer!");
    } else {
      console.log("Wrong answer :(");
    }
  };

  questionOne = new Question("how old is Stephen?", [25, 12, 34], 0);
  questionTwo = new Question("how many dogs does Stephen own?", [1, 2, 5], 1);
  questionThree = new Question(
    "What is the speed limit in california highways?",
    [65, 80, 70],
    0
  );

  // console.log(questionOne);
  // console.log(questionTwo);
  // console.log(questionThree);

  questionArray = [questionOne, questionTwo, questionThree];

  // console.log(questionArray);

  randomQuestion =
    questionArray[Math.floor(Math.random() * questionArray.length)];

  randomQuestion.displayQuestion();

  var answer = parseInt(prompt("please select the correct answer"));

  randomQuestion.checkAnswer(answer);
  // console.log(answer);
})();

*/

//// EXPERT LEVEL

/*

(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    if (ans === this.correctAnswer) {
      console.log("correct Answer!");
      sc = callback(true); // goes to keepScore function if it is true, then it adds a score // this is a closure.
    } else {
      console.log("Wrong answer :(");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("------------------------");
  };

  questionOne = new Question("how old is Stephen?", [25, 12, 34], 0);
  questionTwo = new Question("how many dogs does Stephen own?", [1, 2, 5], 1);
  questionThree = new Question(
    "What is the speed limit in california highways?",
    [65, 80, 70],
    0
  );

  questionArray = [questionOne, questionTwo, questionThree];

  function score() {
    var sc = 0;
    return function(correctAnswer) {
      if (correctAnswer) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    randomQuestion =
      questionArray[Math.floor(Math.random() * questionArray.length)];

    randomQuestion.displayQuestion();

    var answer = prompt("please select the correct answer");

    if (answer !== "exit") {
      randomQuestion.checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();

*/

//// DONE With GAME
