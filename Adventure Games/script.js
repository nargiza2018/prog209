/*
Adventure Game
Nargiza Yusupova
Description: Project One/Two Final
 */

//Setting the locations for the game
const map = [];
map[0] = "Cold Basement.";
map[1] = "Hungry Kitchen.";
map[2] = "Bloody Bathroom";
map[3] = "Bedroom.";
map[4] = "Living Room";
map[5] = "Front Porch";
map[6] = "Boiler Room";
map[7] = "Hallway";
map[8] = "Dining Room";
//this is the player's starting position
let mapLocation = 4;
//setting the haunted house images
const images = [];
images[0] = "Scary-Dark-Basement.jpg";
images[1] = "Hungry-kitchen.jpg";
images[2] = "bloody-bathroom.jpg";
images[3] = "bedroom.jpg";
images[4] = "living-room.jpg";
images[5] = "front-porch.jpg";
images[6] = "boilerroom.jpg";
images[7] = "hallway.jpg";
images[8] = "dining-room.jpg";

//setting the blocked path messages
const blockedPathMessages = [];
blockedPathMessages[0] = "You will die if you go that way.";
blockedPathMessages[1] = "Don't look out of the window.";
blockedPathMessages[2] = "You need to escape the ghost.";
blockedPathMessages[3] = "Step over the object on the floor.";
blockedPathMessages[4] = "";
blockedPathMessages[5] = "The door is not opening.";
blockedPathMessages[6] = "Do not touch anything!";
blockedPathMessages[7] = "Do no eat anything here";
blockedPathMessages[8] = "Someone is chasing you, run!";

//List the items and setting their locations
let player = {
    usedKnife: false,
    usedHammer: false,
    usedMirror: false,
    usedFlashlight: false
};
//There are five declared items that player would have to collect and use
let items = ["key", "knife", "hammer", "mirror", "flashlight"];
//Locating all the items in the rooms
let itemLocations = [3, 6, 7, 2, 0];
//An array to store what is the player is carrying
let backpack = [];
//Begin the players's input
let playersInput = "";
//Initialize the gameMessage
let gameMessage = "";
//Create an array of actions that would be taken in the game,
// and it would understand the messages
const actionsIKnow = ["north", "east", "south", "west", "take", "use", "drop"];
let action = "";
//An array of items the game understands
//and a variable to store the current item
const itemsIKnow = ["key", "knife", "hammer", "mirror", "flashlight"];
let item = "";
//The img element
const image = document.querySelector("img");
//The input and output fields
const output = document.querySelector("#output");
const input = document.querySelector("#input");
//The button
const button = document.querySelector("button");
const enterButton = document.querySelector("#enter");
const startButton = document.querySelector("#start");
const startPage = document.querySelector("#startPage");
const gamePage = document.querySelector("#gamePage");
const endPage = document.querySelector("#endPage");
const winAudio = document.querySelector("#winAudio");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
//Display the player's location
render();
//At the welcome page there will be a start button
startButton.addEventListener("click", startGame, false);
//after starting the game there will be a prompt animation
function startGame() {
    startPage.style.display = "none";
    gamePage.style.display = "block";
    TweenLite.to(gamePage, 0.6, {opacity: 1, ease:Circ.easeIn});
}

function playGame() {
    //Receive the player's input
    playersInput = input.value;
    input.value = "";
    //reset the variables from the previous entries
    gameMessage = "";
    action = "";
    //Identify the player's actions
    for (let i = 0; i < actionsIKnow.length; i++) {
        if (playersInput.indexOf(actionsIKnow[i]) !== -1) {
            action = actionsIKnow[i];
            break;
        }
    }
    //Identify the items that the player wants
    for (let i = 0; i < itemsIKnow.length; i++) {
        if (playersInput.includes(itemsIKnow[i])) {
            item = itemsIKnow[i];
        }
    }

//Choose the correct action
    switch (action) {
        case "north":
            if (mapLocation >= 3) {
                mapLocation -= 3;
            } else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "east":
            if (mapLocation % 3 !== 2) {
                mapLocation += 1;
            } else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "south":
            if (mapLocation < 6) {
                mapLocation += 3;
            } else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;
//Choose the correct location
        case "west":
            if (mapLocation % 3 !== 0) {
                mapLocation -= 1;
            } else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "take":
            takeItem();
            break;

        case "drop":
            dropItem();
            break;

        case "use":
            useItem();
            break;
        default:
            gameMessage = "I don't understand the command.";
    }

    //Render the game
    render();
}
//Player has to take an item from the rooms
function takeItem() {
    //Looking for the index number of the item in the items array
    let itemIndexNumber = items.indexOf(item);
    //Looking for the item whether it exists are the given location
    // or in the Haunted house in general
    if (itemIndexNumber !== -1
        && itemLocations[itemIndexNumber] === mapLocation) {
        gameMessage = `You take the ${item}.`;
        //Put it in the backpack
        backpack.push(item);
        //Remove the items from the location
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);
    } else {
        //Display a message if the player is trying to take the item that is
        // not in the current location
        gameMessage = "You can't do that."
    }
}
//The items will be dropped as the player uses it
function dropItem() {
    //Drop the item only if the player has nothing in the backpack
    if (backpack.length !== 0) {
        const backpackIndexNumber = backpack.indexOf(item);
        //The item is in the backpack if the index number isn't -1
        if (backpackIndexNumber !== -1) {
            //Tell the player that the item has been dropped
            gameMessage = "You drop the " + item + ".";

            //Add the item from the backpack to the game world
            items.push(backpack[backpackIndexNumber]);
            itemLocations.push(mapLocation);

            //Remove the item from the player's backpack
            backpack.splice(backpackIndexNumber, 1);
        } else {
            //Message if the player tries to drop something that's
            // not in the backpack
            gameMessage = "You can't do that.";
        }
    } else {
        //Message if the backpack is empty
        gameMessage = "Your backpack is empty";
    }
}

function useItem() {
    //Look for the item in the backpack
    const backpackIndexNumber = backpack.indexOf(item);
    //If the index number is -1, then it isn't in the backpack.
    //Tell the player that he or she isn't carrying it.
    if (backpackIndexNumber === -1) {
        gameMessage = "You're not carrying it.";
    }

    //If there are no items in the backpack, then
    //tell the player the backpack is empty
    if (backpack.length === 0) {
        gameMessage += " Your backpack is empty";
    }

    //2. If the item is found in the backpack
    //figure out what to do with it
    if (backpackIndexNumber !== -1) {
        switch (item) {
            case "key":
                if (mapLocation === 5) {
                    //in order to use they key, you need to complete
                    // all the actions with the items
                    if (player.usedHammer && player.usedFlashlight
                        && player.usedMirror && player.usedKnife) {
                        gameMessage = "You have a chance to get out of this House";

                        //Remove the item from the player's backpack
                        backpack.splice(backpackIndexNumber, 1);

                        // show finish screen after all the monsters are killed
                        gamePage.style.display = "none";
                        endPage.style.display = "block";
                        winAudio.play();
                    } else {
                        gameMessage
                            = "Monsters are still chasing you, you must kill them all!!";
                    }
                } else {
                    gameMessage
                        = "The key doesn't work here.";
                }
                break;

            case "knife":
                if (mapLocation === 3) {
                    gameMessage
                        = "You can protect yourself!";

                    //Remove the item from the player's backpack
                    backpack.splice(backpackIndexNumber, 1);

                    player.usedKnife = true;
                } else {
                    gameMessage
                        = "Try again.";
                }
                break;

            case "mirror":
                if (mapLocation === 2) {
                    gameMessage = "You can see located the ghosts with it.";

                    //Remove the item from the player's backpack
                    backpack.splice(backpackIndexNumber, 1);

                    player.usedMirror = true;
                } else {
                    gameMessage
                        = "You can hurt your eyes if you aren't careful.";
                }
                break;
            case "flashlight":
                if (mapLocation === 6) {
                    gameMessage = "Find your way in the dark Haunted House.";

                    //Remove the item from the player's backpack
                    backpack.splice(backpackIndexNumber, 1);

                    player.usedFlashlight = true;
                } else {
                    gameMessage
                        = "You killed the medusa. Now run! ";
                }
                break;
            case "hammer":
                if (mapLocation === 7) {
                    gameMessage = "You can broke the walls with it to escape the zombies.";

                    //Remove the item from the player's backpack
                    backpack.splice(backpackIndexNumber, 1);

                    player.usedHammer = true;
                } else {
                    gameMessage
                        = "You will be eaten by the zombies";
                }
                break;
        }
    }
}
function render() {
    //Render the location
    output.innerHTML = map[mapLocation];
    image.src = "./" + images[mapLocation];
    //Display an item if there's one in this location
    //1. Loop through all the game items
    for (let i = 0; i < items.length; i++) {
        //Find out if there's an item at this location
        if (mapLocation === itemLocations[i]) {
            //Display it
            output.innerHTML
                += "<br>You see a <strong>"
                + items[i]
                + "</strong> here.";
        }
    }

    //Display the game message
    output.innerHTML += "<br><em>" + gameMessage + "</em>";

    //Display the player's backpack contents
    if (backpack.length !== 0) {
        output.innerHTML += "<br>You are carrying: " + backpack.join(", ");
    }

    //display monsters
    if (mapLocation === 7 && !player.usedHammer) {
        //if the players is at location Hallway use the hammer to kill the zombie
        output.innerHTML += "<br>There's a zombie here. You can kill it with a hammer!";
    } else if (mapLocation === 6 && !player.usedFlashlight) {
        //If the player is at location Boiler room, use flashlight to kill the medusa
        output.innerHTML += "<br>There's a medusa here. You can kill it with a flashlight!";
    } else if (mapLocation === 3 && !player.usedKnife) {
        //If the player is at location  Bedroom use knife to kill the vampire
        output.innerHTML += "<br>There's a vampire here. You can kill it with a knife!";
    } else if (mapLocation === 2 && !player.usedMirror) {
        //If the player is at location bloody bathroom, use the mirror to kill the clown
        output.innerHTML += "<br>There's a clown here. You can kill it with a mirror!";
    }
}
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
button.addEventListener("mousedown", mousedownHandler, false);
button.addEventListener("mouseout", mouseoutHandler, false);

//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

//This calls and displays the current location of the player
render();

function mousedownHandler() {
    button.style.background
        = "-webkit-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    button.style.background
        = "linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
}

function mouseoutHandler() {
    button.style.background
        = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
}

function clickHandler() {
    button.style.background
        = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
}

enterButton.addEventListener("click", playGame);

function keydownHandler(event) {
    if (event.keyCode === 13) {
        playGame();
    }
}

const save = document.getElementById("save");
const reload = document.getElementById("reload");
const help = document.getElementById("help");

help.addEventListener("click", () => {
    const helpText = "<br><br>Possible commands are north, south, west, east, use, take, drop.";

    if (!output.innerHTML.includes(helpText)) {
        output.innerHTML += helpText;
    }
}, false);
//The player can save the game
function saveGame() {
    //saving the locations
    localStorage.setItem('saveMapLocation', mapLocation);
    localStorage.setItem('saveBackpack', JSON.stringify(backpack));
    localStorage.setItem('saveItems', JSON.stringify(items));
    localStorage.setItem('saveItemLocations', JSON.stringify(itemLocations));
    localStorage.setItem('savePlayer', JSON.stringify(player));
}
//The player can reload the game and start over
function reloadGame() {
    const savedLocation = localStorage.getItem('saveMapLocation');
    const savedBackpack = localStorage.getItem('saveBackpack');
    const savedItems = localStorage.getItem('saveItems');
    const savedItemLocations = localStorage.getItem('saveItemLocations');
    const savedPlayer = localStorage.getItem('savePlayer');
    if (savedLocation !== null) {
        mapLocation = savedLocation;
    }
    if (savedBackpack !== null) {
        backpack = JSON.parse(savedBackpack);
    }
    if (savedItems !== null) {
        items = JSON.parse(savedItems);
    }
    if (savedItemLocations !== null) {
        itemLocations = JSON.parse(savedItemLocations);
    }
    if (savedPlayer !== null) {
        player = JSON.parse(savedPlayer);
    }
    render();
}

//this allows the game to save the location
save.addEventListener("click", saveGame, false);
//this allows the game to reload the page when the player wishes to resume
reload.addEventListener("click", reloadGame, false);
