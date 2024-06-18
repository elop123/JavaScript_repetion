let L5_1 = document.querySelector("#L5_1");
let L5_2 = document.querySelector("#L5_2");
let L5_3 = document.querySelector("#L5_3");
let L5_4 = document.querySelector("#L5_4");
let L5_5 = document.querySelector("#L5_5");


//Opgave 1
//Async function with argument:
async function fetchMovie(){
    const response = await  fetch ('https://jsonmock.hackerrank.com/api/movies');
    const json = response.json();
    return json;   
}
//Call the function
fetchMovie().then(data => console.log(data));

async function Fetch(){
    const respon = await fetch("https://dummyjson.com/products");
    const json = respon.json();
    //displayProducts(products);
    return json;
}


Fetch().then(data => console.log(data));


// //Fetch function beginning

// let myFetchFunction = async (url)=>{
//     //remember resultat from getch in an url
//     let res= await fetch (url);
//     //convert resultat from detch til Json
//     let json = await res.json();
//     //return Json back from function
//     return json;
// };

// //Call the function 

// let data = await myFetchFunction("https://dummyjson.com/products");

//#Opgave 2
//Fetch and get data:

fetch('https://dummyjson.com/products', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {displayProducts(data.products.slice(0,10));
  });

//Display data in Dom:

function displayProducts(products) {
    const container = document.getElementById('list');
    container.innerHTML = ""; // Clear existing content

    products.forEach(product => {
      const productElem = document.createElement('div');
      productElem.innerHTML = `<ul><li>${product.title}: $${product.price}</li></ul`;
      container.appendChild(productElem);
    });
  }


  //#Opgave 3

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: 'emilys',
      password: 'emilyspass' 
    })
  })
  .then(res => res.json())
  .then(data =>{
    displayUser(data.user);
  });

  //Display user in Dom:

  function displayUser(user){
    const userInfo = document.getElementById('L5_3');
    userInfo.innerHTML = `<p>${user}</p>`;

   // L5_3.appendChild(userInfo);
  }

  //Add new user
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'Muhammad',
      lastName: 'Ovi',
      age: 250,
    })
  })
  .then(res => res.json())
  .then(data=>{
    displayNewUser(data)})

function displayNewUser(user){
let container = document.getElementById('');
const newUser = document.getElementById('L5_3');
newUser.innerHTML =  `<p>First Name: ${user.firstName}</p>
<p>Last Name: ${user.lastName}</p>
<p>Age:${user.age}</p>`;

L5_3.appendChild(container);}

//#Opgave 5

//Fetch function with error included:

