const electron = require("electron");
const button1 = document.getElementById("button1");

button1.addEventListener("click", startApp);

function startApp() {
  console.log("Button clicked!");
}
