let GPA = 0;
let SS = 0;

const gpaq1 = document.getElementById("GPA1");
const gpaq2 = document.getElementById("GPA2");
const gpaq3 = document.getElementById("GPA3");
const gpaq4 = document.getElementById("GPA4");

gpaq1.addEventListener("click", updateDB, NewGPA1);
gpaq2.addEventListener("click", updateDB, NewGPA2);
gpaq3.addEventListener("click", updateDB, NewGPA3);
gpaq4.addEventListener("click", updateDB, NewGPA4);  

let db = firebase.database().ref();

function NewGPA1(){
    GPA = "high";
    SS += 3
    console.log(GPA)
}
function NewGPA2(){
    GPA = "average";
    SS += 1
}
function NewGPA3(){
    GPA = "low";
}
function NewGPA4(){
    GPA = "very low";
    SS -= 1
}

function updateDB(event){
    event.preventDefault();
    
}