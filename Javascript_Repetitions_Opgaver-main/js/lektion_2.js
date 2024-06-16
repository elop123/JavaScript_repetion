let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");


//Opgave 1

        function checkTypeOf() {
            let typeInput = document.getElementById('type').value;
            let result = document.getElementById('res');
            let type;

            if (typeInput === " ") {
                type = "empty string";
            } else if (!isNaN(typeInput) && typeInput.trim() !== "") {
                type = "number";
            } else {
                type = "string";
            }

            result.innerText = `${typeInput} is: ${type}`;
        }



 //Opgave 2

//Validation of email:

function validateEmail(email) {
    var email = document.getElementById('email').value;
    var result = document.getElementById('r_email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|dk|net|org|edu|gov|mil|io|co|biz|info|me|us|fr|de)$/i;
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
        result.innerText = '"' + text + '" has a length greater than or equal to 2 letters.';
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

 //Get the random color

 document.getElementById("color-button").addEventListener("click", function() {
    // Generate random RGB values
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Create RGB color string
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    // Assign color to the color box
    document.getElementById("color-box").style.backgroundColor = rgbColor;
});



// random sentence:

let subst = ["jeg", "han", "hun", "dem", "de"];
let verb = ["kaster", "tegner", "giver", "henter"];
let adj = ["vand", "maling", "fyrværkeri", "blomster"];


let subt_1 = Math.floor(Math.random());
let verb_1 = Math.floor(Math.random());
let adj_1 = Math.floor(Math.random());

let result= `${subst[0]} ${verb[0]} ${adj[0]}`;

console.log(subst);
console.log(result);

