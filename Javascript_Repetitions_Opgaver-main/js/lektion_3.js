let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");


// const classArray = ['Makka', 'Elena', 'Mathias', 'Peter', 'Christian']

// function displayClassmates(){

//     for(let i=0; i< classArray.length; i++){
//         let newElement =document.createElement('p');
//         newElement.innerText =classArray[i];
//         //newElement.style= `font-size: ${i}rem`
//         L3_1.appendChild(newElement)
//     }
// }

// displayClassmates();

// //Map methode
// // classArray.forEach(element =>{
// //     let newElement =document.createElement('p');
// //     newElement.innerText =classArray[i];
// //     L3_1.appendChild(newElement)
// // })

// const array = [
//     {
//         role:"student",
//         name:"Mathias",
//         favoritePet:"turtles",
//         editName(value) {
//             this.name = value;
//         },
//     },
//     {
//         role:"student",
//         name:"Makka",
//         favoritePet:"bird",
//         editName(value) {
//             this.name = value;
//         },
//     },
//     {
//         role:"student",
//         name:"Mike",
//         favoritePet:"cat",
//         editName(value) {
//             this.name = value;
//         },
//     },
//     {
//         role:"student",
//         name:"Mary",
//         favoritePet:"dog",
//         editName(value) {
//             this.name = value;
//         },
//     }
// ];


// function randomColor(){
//     let random = Math.ceil(Math.random(0)*255);
//     return random;
// }

// function displayArray(){
//     console.log(array);
//     for(let i=0; i< array.length; i++){
//         let newElement =document.createElement('p');
//         newElement.style= `background-color:rgb(${randomColor()},${randomColor()},${randomColor()} )`;
//         let pet = document.createElement('p');
//         newElement.innerText =array[i].role + " "+ array[i].name;
//         pet.innerText="favorite pet:"+ array[i].favoritePet;
//         L3_1.appendChild(newElement);
//         L3_1.appendChild(pet);
//     }
// }

// displayArray();

//#Opgave 1

const arrayStudents = {
        team:"HF01012024",
        room:"024",
        students:['Makka', 'Elena', 'Mathias', 'Omid', 'Christian', 'Amelia', 'Kasper', 'Lovellen'],
        addStudent: function(newStudent) {
            this.students.push(newStudent);
        }
    };


//console.log(arrayStudents);

arrayStudents.addStudent("Vikki");
console.log(arrayStudents);

//Display all students
let par= document.createElement('p');
par.innerText= "Students:"+" "+ arrayStudents.students;
L3_1.appendChild(par);

//#Opgave 3
function displayInfo(){
// Display team
let teams = document.createElement('p');
teams.innerText ="Team:"+" "+ arrayStudents.team;
L3_3.appendChild(teams);

//Display room
let room = document.createElement('p');
room.innerText ="Room:"+" "+ arrayStudents.room;
L3_3.appendChild(room);



//Display each student
    for(let i=0; i<arrayStudents.students.length; i++){

        let students = document.createElement('p');
        students.innerText="Student Name:"+" "+arrayStudents.students[i];
        L3_3.appendChild(students);
    
    }}

    displayInfo();

//Opgave 4

let numbers =[0,3,8,99,55.5, 0.5, 100, 1000, 9999, 500];

for(let i=0; i<numbers.length; ){
    let sum = document.createElement('p');
    sum.innerText= "The sum is:"+ " "+ numbers;
    L3_4.appendChild(sum);
}
