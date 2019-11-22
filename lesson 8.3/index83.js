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