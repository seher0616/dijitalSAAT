const clockDviv = document.getElementById("clock");
const dateDiv = document.getElementById("Date");

setInterval(() => {
  clockDviv.innerText = new Date().toLocaleTimeString("tr-TR");
}, 1000);
setInterval(() => {
  dateDiv.innerText = new Date().toLocaleDateString("tr-TR");
}, 1000);
