const firstEl = document.getElementById("he");
const SecondEl = document.getElementsByClassName("hello");
const ThirdEl = document.querySelector("div");
console.log(firstEl);
console.log(SecondEl[0]);
console.log(ThirdEl);
firstEl.innerText = "Im here";
firstEl.innerHTML = "Im <strong>here</strong>";
/*firstEl.style.color = "red";
firstEl.style.backgroundColor = "#ccc";
firstEl.style.padding = "10px";*/

firstEl.classList.add("added");

const body = document.querySelector("body");

body.innerHTML += "<div class='added'>new</div>";

const newEl = document.createElement("div");
newEl.innerText = "new 2";
newEl.classList.add("added");
body.appendChild(newEl);