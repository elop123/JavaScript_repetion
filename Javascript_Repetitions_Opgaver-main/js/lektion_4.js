let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");


let firstNameElement = document.querySelector('#first');
let lastNameElement = document.querySelector('#last');


let firstName;
let lastName;

firstNameElement.addEventListener('change', ()=>{
    //console.log(firstNameElement.value);
    firstName = firstNameElement.value;
    console.log(firstName);
})

lastNameElement.addEventListener('change', ()=>{
    //console.log(firstNameElement.value);
    lastName = lastNameElement.value;
    console.log(lastName);
})

// Opgave 1
function fullName() {
    //console.log(fullName);
    let myName = firstName + " " + lastName;
    let newH3 = document.createElement("h3");
    newH3.innerText = myName;  
    L4_1.appendChild(newH3);
  }
  

 
//  setTimeout(()=>{
// newH3.innerText = " ";
//  }, 3000);


//  function countUp(){

//     setInterval(() => {
//         if (time <10){}
//         time=+1;
//         let newP = document.createElement('p');
//         newP.innerText = "time is:" + time;
//     }, 1000);
   
//  }

//#Opgave 2

//Delay function usinf setTimeout():

let delayButton = document.querySelector('#delayButton');


delayButton.addEventListener('click', myFunction);

function myFunction() {
    setTimeout(() => {
        let newPa = document.createElement('p');
        newPa.innerText = "Hello";
        L4_2.appendChild(newPa);
    }, 4000);  
}

//#Opgave 3
let time = 0;
let interval;
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');


startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);

function startStopwatch() {
    interval = setInterval(() => {
        time++;
        let newPar = document.getElementById('timer');
        newPar.innerText = "Time is:" + time;
        L4_3.appendChild(newPar);
    }, 1000); // Update every second (1000 milliseconds)
}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;
}


//#Opgave 4

let move = 0;

function scroll(){
    move++;
    let newMove = document.getElementById('L4_4');
    newMove.innerText = `Scrolled : ${move} times.`;
    newMove.appendChild(move);
    console.log(move);

}

