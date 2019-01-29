/*
Exercise 4
Nargiza Yusupova

Description: Color picker Assignment
 */
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var color = document.getElementById("color");

function doReset() {
    red.value = "";
    green.value = "";
    blue.value = "";
    color.style.backgroundColor = "transparent";
}

function validate(n) {
    if (!isNaN(n) && n >= 0 && n <= 255)
        return true;

    return false;
}

function doShow() {
    var redNumber = parseInt(red.value);
    var greenNumber = parseInt(green.value);
    var blueNumber = parseInt(blue.value);

    if (validate(redNumber) && validate(greenNumber) && validate(blueNumber))
        color.style.backgroundColor = "rgb(" + redNumber + "," + greenNumber + "," + blueNumber + ")";
    else
        alert("Invalid input");
}

var reset = document.getElementById("reset");
reset.addEventListener("click", doReset);

var show = document.getElementById("show");
show.addEventListener("click", doShow);

