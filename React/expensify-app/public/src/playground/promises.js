const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ name: "steve", age: 26 });
  //   }, 1500);
  reject("error  - something went wrong");
});

promise
  .then(data => {
    console.log("1", data);
    return "some string";
  })
  .then(str => {
    console.log("does this run?", str); //yes returns does this run, some string.
  })
  .catch(error => {
    console.log(error);
  });
