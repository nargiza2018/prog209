// Arrow key codes
const UP = 38,
	DOWN = 40,
	RIGHT = 39,
	LEFT = 37,
	UFOUP= 87,
	UFODOWN = 90;

// rocket object
const rocket = {
	img: document.querySelector("#rocket"),
	x: 490,
	y: 390,
	width: 100
};

//ufo object
const ufo = {
	img: document.querySelector("#ufo"),
	x: 250,
	y: 300,
	width: 100,
};

const velocity = 2;

const torpedo = document.querySelector("#torpedo"),
	startBtn = document.querySelector("#start"),
	fireBtn = document.querySelector("#fire"),
	torpedoAudio = document.querySelector("#torpedoAudio");

// Initialize objects on the screen
render ( );

startBtn.addEventListener("click",( ) =>  {
	"use strict";
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.img.style.display = "block";
}, false);

fireBtn.addEventListener("click",fireTorpedoHandler,false)
window.addEventListener("keydown",keydownHandler,false);

function fireTorpedoHandler( ) {
	"use strict";
	// Fire the photon torpedo!
	// CSS animation occurs whenever torpedo
	// 'left' property changes value
	torpedo.style.visibility = "visible";
	torpedo.style.left = (rocket.x - 200)+ "px";
	torpedoAudio.play();
}

function keydownHandler(event) {
	"use strict";
	// handle user keyboard input

	if (event.keyCode == UP) {
		rocket.y -= velocity;
	}
	if (event.keyCode == LEFT) {
		rocket.x -= velocity;
	}
	if (event.keyCode === DOWN) {
		rocket.y += velocity;
	}
	if (event.keyCode == RIGHT) {
		rocket.x += velocity;
	}
	if (event.keyCode == UFOUP) {
		ufo.y -= velocity;
	}
	if (event.keyCode == UFODOWN) {
		ufo.y += velocity;
	}
	render();
}

function render( ) {
	"use strict";
	// position objects on the screen
	rocket.img.style.left = rocket.x + "px";
	rocket.img.style.top = rocket.y + "px";
	torpedo.style.left = (rocket.x +10) + "px";
	torpedo.style.top = (rocket.y+8) + "px";
	torpedo.style.visibility = "hidden";
	ufo.img.style.top = ufo.y + "px";
}