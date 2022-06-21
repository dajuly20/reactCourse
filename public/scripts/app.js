console.log("App.js is running");

var template = React.createElement("p", null, "This is JSX from app.js!");// <p>This is JSX from app.js!</p>
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);