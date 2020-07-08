import * as firebase from "firebase";
import { expenses } from "../tests/fixtures/expenses";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:206017413049:web:6fb3a1700e05bbf33fc068",
  measurementId: "G-YNKS0HZ6VY"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

//child_remove
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_added

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "March rent",
//   amount: 150000,
//   createdAt: 3242342
// });

// database.ref("notes/-M8RCbRhWoBfPYDc6CL5").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "JS, CSS, HTML"
// });

// database.ref().on(
//   "value",
//   snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//     console.log(`${val.name} is a ${val.job.title} at a ${val.job.company} `);
//   },
//   e => {
//     console.log("error fetching data", e);
//   }
// );

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fething data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Stephen Bilham",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software deveoper",
//       company: "Google"
//     },
//     location: {
//       city: "San Diego",
//       country: "USA"
//     }
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(error => {
//     console.log("this failed", error);
//   });

// database
//   .ref("isSingle")
//   .set(null)
//   .then(() => {
//     console.log("removal successful");
//   })
//   .catch(error => {
//     console.log("this was not succesful", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });
