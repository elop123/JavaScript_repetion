let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1
function fullName(firstName, lastName) {
  let myName = firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = myName;
  L1_1.appendChild(newH3);
}

fullName("Elena", "Oprea");

// Opgave 2

function myButton(){
  let element = document.getElementById("hidden_text");
  element.classList.toggle("hidden");
}

// Opgave 3

function toggleColor() {
  const element = document.getElementById('content');
  const message = document.getElementById('message');
  if (element.classList.toggle('colored')) {
    message.innerText = 'The color has been changed.';
  } else {
    message.innerText = 'The color has been removed.';
  }
}

//Opgave 4 

let click = 0;

    function ClickCount() {
      click++;
      document.getElementById('click-count').innerText = `Number of clicks: ${click}`;
    }

//Opgave 5

function displayWordInfo() {
  // Get the word from the input field
  const word = document.getElementById('wordInput').value;
  
  // Calculate the length of the word
  const wordLength = word.length;
  
  // Display the word and its length in the DOM
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `You entered: ${word}<br>The word length is: ${wordLength}`;
}


//Opgave  6

function removeVowels()  {
  // Get the word from the input field
  const word = document.getElementById('word').value;
  
  // Define vowels
  const vowels = /[aeiouAEIOU]/g;
  
  // Remove vowels from the word
  const cleanedWord = word.replace(vowels, '');
  
  // Display the cleaned word in the DOM
  const output = document.getElementById('out');
  output.innerText = `Cleaned word: ${cleanedWord}`;
}


// Function Calls
//fullName("Ukendt", "Person");
