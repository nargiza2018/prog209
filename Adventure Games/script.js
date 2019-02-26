/*
Adventure Game
Nargiza Yusupova
Description: Project One
 */

//Setting the locations for the game
const map = [];

map[0] = "Cold Basement.";
map[1] = "Hungry Kitchen.";
map[2] = "Bloody Bathroom";
map[3] = "Bedroom.";
map[4] = "Living Room";
map[5] = "Front Porch";

//this is the player's starting position
let mapLocation = 0;

//setting the haunted house images
const images = [];

images[0] = "Scary-Dark-Basement.jpg";
images[1] = "Hungry-kitchen.jpg";
images[2] = "bloody-bathroom.jpg";
images[3] = "bedroom.jpg";
images[4] = "living-room.jpg";
images[5] = "front-porch.jpg";

//setting the blocked path messages
const blockedPathMessages = [];

blockedPathMessages[0] = "You will die if you go that way.";
blockedPathMessages[1] = "Don't look out of the window.";
blockedPathMessages[2] = "You need to escape the ghost.";
blockedPathMessages[3] = "Step over the object on the floor.";
blockedPathMessages[4] = "";
blockedPathMessages[5] = "The door is not opening.";

//setting the blocked path messages
const helpMessages = [];

helpMessages[0] = "";
helpMessages[1] = "I wonder if you could find a tool to get out of here?";
helpMessages[2] = "";
helpMessages[3] = "If you find the key you might be able to open the door?";
helpMessages[4] = "";
helpMessages[5] = "";
helpMessages[6] = "";

//create the objects the player is carrying and setting their locations
const items = ["key"];
const itemLocations = [3];

//An array to store what the player is carrying
const knife = [];

//Initialize the player's input
let playersInput = "";

//Initialize the gameMessage
let gameMessage = "<br>Welcome to your worst nightmare!";
gameMessage += "Try any of these words: ";
gameMessage += "north, east, south, west, take, turn, ";
gameMessage += "use, take, open, key, help.";

//Create an array of actions the game understands which the player would be using
//and a variable to store the current action
const actionsIKnow
    = ["north", "east", "south", "west",
    "help", "take", "use", "key"];
let action = "";
//An array of items the game understands
//and a variable to store the current item
const itemsIKnow = ["key", "knife"];
let item = "";

//The img element
const image = document.querySelector("img");

//The input and output fields
const output = document.querySelector("#output");
const input = document.querySelector("#input");

//The buttons used on the mouse
const button = document.getElementById("enter");
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

    playGame();
}

function keydownHandler(event) {
    if (event.keyCode === 13) {
        playGame();
    }
}

function playGame() {
    //Get the player's input and convert it to lowercase
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();

    //Reset these variables from the previous turn
    gameMessage = "";
    action = "";

    //Figure out the player's action
    for (let i = 0; i < actionsIKnow.length; i++) {
        if (playersInput.indexOf(actionsIKnow[i]) !== -1) {
            action = actionsIKnow[i];
            console.log("player's action: " + action);
            break;
        }
    }

    //Figure out the item the player wants
    for (let i = 0; i < itemsIKnow.length; i++) {
        if (playersInput.indexOf(itemsIKnow[i]) !== -1) {
            item = itemsIKnow[i];
            console.log("player's item: " + item);
        }
    }

    //Choose the correct action to get of the Haunted House alive
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
            if (mapLocation < 3) {
                mapLocation += 3;
            } else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "west":
            if (mapLocation % 3 !== 0) {
                mapLocation -= 1;
            } else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "help":
            //Display a hint if there is one for this location
            if (helpMessages[mapLocation] !== "") {
                gameMessage = helpMessages[mapLocation] + " ";
            }
            gameMessage += "Try any of these words: ";
            gameMessage += "north, east, south, west, take, drop, ";
            gameMessage += "use, key, knife.";
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
            gameMessage = "I don't understand that. Try again";
    }

    //Render the game
    render();
}

function takeItem() {
    //Find the index number of the item in the items array
    const itemIndexNumber = items.indexOf(item);

    //Does the item exist in the game world
    //and is it at the player's current location?
    if (itemIndexNumber !== -1
        && itemLocations[itemIndexNumber] === mapLocation) {
        gameMessage = "You take the " + item + ".";

        //Add the item to the player's backpack
        knife.push(item);

        //Remove the item from the game world
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);

        //Display in the console for testing
        console.log("Personal: " + items);
        console.log("pocket items: " + knife);
    } else {
        //Message if you try and take an item
        //that isn't in the current location
        gameMessage = "You can't do that.";
    }
}

function dropItem() {
    //Try to drop the item only if the backpack isn't empty
    if (knife.length !== 0) {
        //Find the item's array index number in the backpack
        const knifeIndexNumber = knife.indexOf(item);

        //The item is in the backpack if backpackIndex number isn't -1
        if (knifeIndexNumber !== -1) {

            //Tell the player that the item has been dropped
            gameMessage = "You drop the " + item + ".";

            //Add the item from the backpack to the game world
            items.push(knife[knifeIndexNumber]);
            itemLocations.push(mapLocation);

            //Remove the item from the player's backpack
            knife.splice(knifeIndexNumber, 1);
        } else {
            //Message if the player tries to drop
            //something that's not in the backpack
            gameMessage = "You can't do that.";
        }
    } else {
        //Message if the backpack is empty
        gameMessage = "You're not carrying anything.";
    }
}

function useItem() {
    //1. Find out if the item is in the backpack

    //Find the item's array index number in the backpack
    const knifeIndexNumber = knife.indexOf(item);

    //If the index number is -1, then it isn't in the backpack.
    //Tell the player that he or she isn't carrying it.
    if (knifeIndexNumber === -1) {
        gameMessage = "You're not carrying it.";
    }

    //If there are no items in the backpack, then
    //tell the player the backpack is empty
    if (knife.length === 0) {
        gameMessage += "The ghost took your knife";
    }

    //2. If the item is found in the backpack
    //figure out what to do with it
    if (knifeIndexNumber !== -1) {
        switch (item) {
            case "kitchenKnife":
                if (mapLocation === 5) {
                    gameMessage = "Beautiful music fills the air.";
                    gameMessage += "Kind ghost shows you the way";
                    gameMessage += "and you are outside on the porch!";

                    //Add the sword to the world
                    items.push("key");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                } else {
                    gameMessage = "Try to listen to the whispers.";
                    gameMessage += "but it makes no sound here.";
                }
                break;

            case "key":
                if (mapLocation === 5) {
                    gameMessage
                        = "You use the key to open the door! ";
                    gameMessage
                        += "You are free and your nightmare is over!";

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                } else {
                    gameMessage
                        = "You dropped they key";
                }
                break;

            case "knife":
                if (mapLocation === 1) {
                    gameMessage = "You drop the stone in the well.";
                    gameMessage += " A magical flute appears!";

                    //Remove the stone from the player's backpack
                    knife.splice(knifeIndexNumber, 1);

                    //Add the flute to the world
                    items.push("knife");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                } else {
                    gameMessage
                        = "You using knife to protect yourself.";
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

    //Display the player's pocket contents
    if (knife.length !== 0) {
        output.innerHTML += "<br>You are carrying: " + knife.join(", ");
    }

    //Display the game message
    output.innerHTML += "<br><em>" + gameMessage + "</em>";

    //Clear the input field
    input.value = "";
}

const save = document.getElementById("save");
const reload = document.getElementById("reload");

function saveGame() {
    //saving the locations
    localStorage.setItem('saveMapLocation', mapLocation);
}

function reloadGame() {
    const savedLocation = localStorage.getItem('saveMapLocation');
    if (savedLocation !== null) {
        mapLocation = savedLocation;
        render();
    }
}

save.addEventListener("click", saveGame, false);
reload.addEventListener("click", reloadGame, false);
