"use strict";

//JSX -Javascript XML

//if statements
//ternary
//logical and operators
//only render the subtitle (and p tag) if subtitle exists - logical and operator
//render new p tag - if options > 0 "here are you options " - turnary
//

var app = {
  title: "indecision app",
  subtitle: "put your life in the hands of a computer",
  options: ["one", "two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title.toUpperCase()
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "here are your options" : "no options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "item one"
    ),
    React.createElement(
      "li",
      null,
      "item two"
    ),
    React.createElement(
      "li",
      null,
      "item three"
    )
  )
);

var user = {
  name: "Stephen",
  age: "26",
  location: "Malibu"
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location: ",
      location
    );
  } else {}
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    " Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

//not a big fan of {user.age && user.age >= 18 && <p> Age: {user.age}</p>} This could be coded better as a ternary or a function; the && operator is to value if two conditons are true then return something but it is used in a way to return something <p> this contradicts why i use them.
