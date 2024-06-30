/*let age = prompt("What is your age");
if(age < 23){
    alert("Too young");
}
else if( age > 23){
    alert("Too old");
}
else{
    alert("Correct");
}

let name = prompt("What is your name");
if(name == "Emmanuel"){
    alert("Welcome the future billionaire Emmanuel Chigozie")
}
else{
    alert("You're wrong");
}

//THE NULLISH SHIT
let number = null;
let firstName = "Chigozie";
let last = undefined;
alert(number ?? firstName ?? last);


//THE WHILE LOOP
let i = 5;
while (i){
    alert( i );
    i--;
}
let c = 0;
while(c < 3){
    alert(c);
    c++
}
let t = 0;
if (t < 3){ alert(t); t++}
//If condition>Run body and Run step
if (t < 3){ alert(t); t++}
//If condition>Run body and Run step
if (t < 3){ alert(t); t++}
//If condition>Run body and Run step


//THE FOR LOOP
for(let x = 0; x < 3; x++){
    alert(x);
}
alert(x);


//THE "DO WHILE" LOOP
let g = 0;
do {
    alert(g);
    g++
}while(g < 7);//This will display "0,1,2,3,4,5,6"




let v = 3;
for (v = 0; v < 3; v++) {
    alert(v);
}
alert(v);//3 will be visible, because it is declared outside the loop "let v = 0"

//SKIPPING PART
let i = 0;// It has already been assigned here 
for(; i < 3; i++){ //The begin is omited here
    alert(i);
}
//We can also omit the step
let t = 0;
for(; t < 4;){// The step is being removed 
    alert(t++);//The step is declared here 
}

//BREAKING THE LOOP
let sum = 0;
while (true){
    let value = +prompt("Enter a number", '');
    if(!value) break;
    sum += value ;
   
}
alert( 'sum: ' + sum);

//USING MULTIPLE "?"
let date = prompt('Your age?', 23);
let message = (date < 3)? 'Hello baby':
(date < 23)? 'Hello':
(date < 100)? 'Greetings':
"What an unusual age";
alert(message);
*/

/* STOP WATCH FUNCTIONALITIES */

// BUTTON VARIABLES
const startStopBtn = document.querySelector(".startStopBtn");
const resetBtn = document.querySelector(".resetBtn");

// TIMER VARIABLES

let seconds = 0;
let minutes = 0;
let hours = 0;

// ADDING LEADING TIMER WITH A FUNCTION

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// ADDING FUNCTIONALITY TO THE BUTTONS
let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  document.querySelector("#timer").innerHTML =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);

    startStopBtn.innerHTML = `<img src="image/pause.png" alt="" class="button__img" id="pause" />`;

    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);

    startStopBtn.innerHTML = `<img src="image/play.png" alt="" class="button__img" id="play" />`;

    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  hours = 0;

  window.clearInterval(timerInterval);

  document.querySelector("#timer").innerHTML = "00:00:00";
});

// DOM PRACTICE

console.dir(document);
console.log(document.title);
console.log(document.body);
console.log(document.getElementById("fjfjj"));
