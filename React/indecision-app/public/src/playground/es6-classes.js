class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  //method
  getGreeting() {
    return `hi, I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` there major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      return `${greeting} and I am from ${this.homeLocation} `;
    }
    return greeting;
  }
}

//travler -->
//Add support for homeLocation
//override get greeting
// if home location - add to home location
// hi i am stephen, im visiting from home location
// hi i am stephen

const me = new Traveler("Stephen", 26, "San Diego");
console.log(me.getGreeting());

const other = new Traveler("ben");
console.log(other.getGreeting());
