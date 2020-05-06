///     OBJECT DESTUCTURING

// const person = {
//   name: "Stephen",
//   age: 27,
//   location: {
//     city: "San Diego",
//     temp: 72
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = "Default", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city} `);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(`the publishers is: ${publisherName}`);

///     ARRAY DESTUCTURING

// const address = ["1723 Jupiter Street", "Philadeplia", "Pensilvania", "12012"];

// const [, city, state = "New York"] = address; // goes by position , skips !

// console.log(`you are in ${city} ${state}`);

const item = ["coffee (hot)", "$2.00", "$2.50", "$3.00"];
const [itemName, , mediumPrice] = item;

console.log(`a medium ${itemName} costs ${mediumPrice}`);
