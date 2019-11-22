let counter =0;

function buttonClicked() {
    counter+=1;
   const div =  document.getElementsByClassName("textdiv");
   div.innerText = "You clicked: " + counter;
}