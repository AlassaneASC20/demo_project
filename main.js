let name;
let GPA;
let SS;
let optionClicked = document.getElementsByClassName("optionClicked");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const gpaq1 = document.getElementById("GPA1");
const gpaq2 = document.getElementById("GPA2");
const gpaq3 = document.getElementById("GPA3");
const gpaq4 = document.getElementById("GPA4");
const submit = document.getElementById("submitButton")

gpaq1.addEventListener("click", selectGPA1);
gpaq2.addEventListener("click", selectGPA2);
gpaq3.addEventListener("click", selectGPA3);
gpaq4.addEventListener("click", selectGPA4);  

submit.addEventListener("click",updateDB);

let db = firebase.database().ref();


function selectGPA1(){
     GPA = "high";
     console.log(GPA)
     document.getElementById("GPA1").className = "optionClicked";
     document.getElementById("GPA4").className = "option";
     document.getElementById("GPA2").className = "option";
     document.getElementById("GPA3").className = "option";
}
function selectGPA2(){
    GPA = "average";
    console.log(GPA)
    document.getElementById("GPA2").className = "optionClicked";
    document.getElementById("GPA1").className = "option";
    document.getElementById("GPA4").className = "option";
    document.getElementById("GPA3").className = "option";
} 
function selectGPA3(){
    GPA = "ok";
    console.log(GPA)
    document.getElementById("GPA3").className = "optionClicked";
    document.getElementById("GPA1").className = "option";
    document.getElementById("GPA2").className = "option";
    document.getElementById("GPA4").className = "option";
} 

function selectGPA4(){
    GPA = "low";
    console.log(GPA)
    document.getElementById("GPA4").className = "optionClicked";
    document.getElementById("GPA1").className = "option";
    document.getElementById("GPA2").className = "option";
    document.getElementById("GPA3").className = "option";
}

function updateDB(event){
    event.preventDefault();
    const name = firstName.value +" "+ lastName.value;
    const grades  = GPA;
    
    firstName.value = "";
    lastName.value = "";

    //console.log(grades);

    //Update database here
    let userInfo = {
        "username" : name, 
        "grades" : grades,
        
    };
    db.push(userInfo);

}

let fName

