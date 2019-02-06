/*
Exercise 5
Nargiza Yusupova
Description: Shuffling an array
 */

'use strict';
var nonShufflingArray = [];
function insert(){
    var nonShufflingValue = document.getElementById('nonShufflingArray').value;

    nonShufflingArray[nonShufflingArray.length] = nonShufflingValue;
}

function show() {
    var content="<b>Display 9 different items</b>
    for(var i = 0; i < nonShufflingArray.length; i++) {
        content += nonShufflingArray[i] + "<br>";
    }

    document.getElementById('display').innerHTML = content;
}

messageBox.innerHTML += "nonShuffling:" + firstName.join(", ") + "<br/>";

}

var shuffledArray=[];
while (nonShufflingArray.length > 0) {
    let rnd = Math.floor(Math.random() * nonShufflingArray.length);
    shuffledArray.push(nonShufflingArray[rnd]);
    nonShufflingArray.splice(rnd, 1);
    console.log("Shuffled array: " + nonShufflingArray);
}