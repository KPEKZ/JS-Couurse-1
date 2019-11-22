let counter =0;

function OnbuttonClicked() {
    counter+=1;
    const div =  document.getElementById("textdiv");
    div.innerText = "You clicked: " + counter;
}

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("button");
    btn.addEventListener("click", OnbuttonClicked);
    btn.addEventListener("click",()=> console.log("click"));
});
