/*
Exercise 5
Nargiza Yusupova
Description: Shuffling an array
 */

'use strict';
var nonShufflingArray = [];
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
    nonShufflingArray[nonShufflingArray.length] = nonShufflingValue;
}

document.getElementById('display').innerHTML = content;


function show() {
    var content="<b>Display 9 different items</b>;
    for(var i = 0; i < nonShufflingArray.length; i++) {
        content += nonShufflingArray[i] + "<br>";
    }


messageBox.innerHTML += "nonShuffling:" + nonShufflingArray.join(", ") + "<br/>";

}
var shuffledArray=[];
while (nonShufflingArray.length > 0) {
    let rnd = Math.floor(Math.random() * nonShufflingArray.length);
    shuffledArray.push(nonShufflingArray[rnd]);
    nonShufflingArray.splice(rnd, 1);
    console.log("Shuffled array: " + nonShufflingArray);
}