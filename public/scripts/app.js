"use strict";

console.log("App.js is running");

var template = React.createElement(
  "p",
  null,
  "This is JSX from the NEW app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
