"use strict";

React.createElement(
  "h1",
  null,
  "Visible Toggle"
);

var app = {
  title: "Visible Toggle",
  details: "here are the details"
};

var visiblity = false;

var toggleVisiblity = function toggleVisiblity() {
  visiblity = !visiblity;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "button",
      { onClick: toggleVisiblity },
      visiblity ? "hide details" : "show details"
    ),
    visiblity && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Here are some details you can now see"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
