/*
Exercise 5
Nargiza Yusupova

Description: Shuffling an array
 */
var firstName=new Array();
var  middleName=new Array();
var lastName=new Array();
var age = new Array();
var gender = new Array();
var hairColor = new Array();
var eyeColor = new Array();
var race = new Array();
var birthdate = new Array();


function insert(){
    var firstNameValue = document.getElementById('firstName').value;
    var middleNameValue = document.getElementById('middleName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var ageValue = document.getElementById('age').value;
    var genderValue = document.getElementById('gender').value;
    var hairColorValue =  document.getElementById('hairColor').value
    var eyeColorValue = document.getElementById('eyeColor').value;
    var raceValue = document.getElementById('race').value;
    var birthdateValue = document.getElementById('birthdate').value;
    var messageBox  = document.getElementById("display");
    firstName[firstName.length] = firstNameValue;
    middleName[middleName.length] = middleNameValue;
    lastName[lastName.length] = lastNameValue;
    age[age.length] = ageValue;
    gender[gender.length] = genderValue;
    hairColor[hairColor.length] = hairColorValue;
    eyeColor[eyeColor.length] = eyeColorValue'
    race[race.length] = raceValue;
    birthdate[birthdate.length] = birthdateValue;
   }

function show() {
    var content="<b>Display 9 different items</b>
    for(var i = 0; i < firstName.length; i++) {
        content +=firstName[i]+"<br>";
    }
    for(var i = 0; i < middleName.length; i++) {
        content +=middleName[i]+"<br>";
    }
    for(var i = 0; i < lastName.length; i++) {
        content +=lastName[i]+"<br>";
    }
    for (var i = 0; i <age.length; i++) {
        content +=age[i]+"<br>";
    }
    for (var i = 0; i <gender.length; i++) {
        content += gender[i] + "<br>";
    }
    for (var i = 0; i <hairColor.length; i++) {
        content += hairColor[i]+"<br>";
}   }
    for (var i = 0; i <eyeColor.length; i++) {
        content += eyeColor[i]+ "<br>";
    }
    for (var i = 0; i <race.length; i++) {
        content += race[i]+ "<br>";
    }
    for (var i= 0; i < birthdate.length; i++) {
        content +=birthdate[i] +"<br>";
        document.getElementById('display').innerHTML = content;

        messageBox.innerHTML = "";

        messageBox.innerHTML += "FirstName:" + firstName.join(", ") + "<br/>";
        messageBox.innerHTML += "MiddleName:" + middleName.join(", ") + "<br/>";
}