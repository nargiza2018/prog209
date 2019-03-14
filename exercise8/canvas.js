//Nargiza Yusupova
//Exercise 8 on WB and Module 7
var canvas = document.querySelector("#doNotEnter");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF1C0A";
ctx.beginPath();
ctx.arc(150, 150, 150, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

ctx.fillStyle  = "white";
ctx.font = "bold 50px Arial";
ctx.fillText( "DO NOT" ,50, 100);
ctx.restore();

ctx.fillStyle = "white";
ctx.fillRect(50, 130, 200, 50);

ctx.fillStyle  = "white";
ctx.font = "bold 50px Arial";
ctx.fillText( "ENTER" ,70, 250);
ctx.restore();

var canvas = document.querySelector("#dontFeedRats");
var ctx = canvas.getContext("2d");
var  img = document.getElementById("rat");

window.onload = () => {
    ctx.drawImage(img, 0, 0);
    ctx.save();
//ctx.beginPath();
    ctx.arc(100, 100, 100, 0, Math.PI*2, true);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 20;
//ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(30, 20);
    ctx.lineTo(400, 300);
    ctx.stroke();
};




