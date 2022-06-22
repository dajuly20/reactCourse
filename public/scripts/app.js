"use strict";

console.log("App.js is running");

var template = React.createElement(
  "h1",
  null,
  "Mein N\xE4m isch Julian"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
