let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");


//Opgave 1

function check(value) {
    let result = document.getElementById('result');
    if (typeof value === 'string') {
        result.innerText = value + ' er af typen: string';
    } else if (typeof value === 'number') {
        result.innerText = value + ' er af typen: number';
    } else {
        result.innerText = 'Ukendt type';
    }
}
 // Example usage
 var inputValue = 123;
 check(inputValue); // Call the function with a value

 //Opgave 2

//Validation of email:

function validateEmail(email) {
    var email = document.getElementById('email').value;
    var result = document.getElementById('r_email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|dk|org|net|edu|gov)$/i;
    if (emailRegex.test(email)) {
        result.innerText = email + ' is a valid email address.';
    } else {
        result.innerText = email + ' is not a valid email address.';
    }
}


//Opgave 3

function checkStringLength(inputString) {
    var text = document.getElementById('text').value;
    var result = document.getElementById('outPut');
    if (text.length >= 2) {
        result.innerText = '"' + text + '" has a length greater than 2 letters.';
    } 
    else {
        result.innerText = '"' + text + '" does not have a length greater than or equal to 2 letters.';
    }
}

//Opgave 4

function RandomNumber(startValue, endValue) {
    var randomNumber = Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;
    var result = document.getElementById('results');
    result.innerText = "Our random number between " + startValue + " and " + endValue + " is: " + randomNumber;
}

//Opgave 5

