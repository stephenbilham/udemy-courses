var name = "stephen b";
var name = "stephen";

console.log(name);

let nameLet = "eve b";
// let nameLet = "stephen"; no longer valid to redefine variable but you can re assign
nameLet = "eve";

console.log(nameLet);

const nameConst = "frank";
// const nameConst = "frankie"; // same as let
// nameConst = "frankies"; // cant even reassign!

console.log(nameConst);

function getPetName() {
  var petName = "hal";
  //   console.log(petName); can is in scope
  return petName;
}

getPetName();
// console.log(petName); not in scope cant find

const petName = getPetName();
// console.log(petName); // works

// BLOCK SCOPING

const fullName = "matt barr";
// let lastName; --> remove var and let inside  then last console.log will work

if (fullName) {
  var firstName = fullName.split(" ")[0];
  let lastName = fullName.split(" ")[1];
  console.log(firstName);
  console.log(lastName);
}

// console.log(lastName); // works ONLY IF var because var isnt block scoped if it was let this would fail (you can move the let outside of the block and itll work but remove the var from first and last name inside)
