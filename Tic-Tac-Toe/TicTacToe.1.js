//data object that represents the games status
    // will need to keep track of: the players and which symbol represents their turn

var gameState = {
        moves: 1,   
        player1: "",
        player2: "",
        currentPlayer: "",
        gamefield: {
            "one": "",
            "two": "",
            "three": "",
            "four":"",
            "five":"",
            "six": "",
            "seven": "",
            "eight":"",
            "nine":""
        }
    }
// Locate what items from the html we will need to reference
    // list: form, form input, the boardgame, each individual field within the boardgame
const configForm = document.getElementById("config-form");
var userList = document.getElementsByName("user");
const gameBoard = document.getElementById("game-board");
const closebtn = document.querySelector(".closebtn");

resetbtn = document.getElementById("restartBtn").onclick = () => { location.reload();};
closebtn.addEventListener("click", () => {
    console.log("should close modal");
    document.getElementById("gameConfigForm").classList.add("hidden");
});

// Game flow 
    //player needs to select which mark they want to be through form submission

    configForm.onsubmit = (event) => {
        event.preventDefault();
        userList.forEach( mark => { mark.checked ? gameState.player1 = mark.id : gameState.player2 = mark.id;})
        configForm.reset();
        document.getElementById("gameConfigForm").classList.add("hidden");
        gameBoard.classList.remove("hidden");
        gameState.player1 !== ""? determineFirstPlayer() : console.log("waiting for player to select mark");
        turn();
        if( gameState.moves <=9) {
            gameState.moves++; 
            turn(); 
         }
         else {
             prompt("You're both fired - it's a draw!");
         }
    }
    
    //a player will need to go first, we will select random from number from options
    //game board will be available for selection
    function determineFirstPlayer(event) {
        var options = ["player1", "player2"];
        gameState.currentPlayer = options[Math.floor(Math.random()*Math.floor(2))];
        alert(`Donald Trump has spoken, ${gameState.currentPlayer} will go first!`)
        return gameState.currentPlayer;
    }

// add event listeners to the boardfield, on each turn the following needs to happen
        //person selects board,
function turn() {
    gameBoard.onclick =  ( )=> { 
        var selection = locateSpot(); 
        if (checkAvail(selection)) {
            addMark(selection)
        };
        gameState.currentPlayer == "player1"? gameState.currentPlayer == "player2" : gameState.currentPlayer == "player1";
    };
}

function addMark(validLocationId) {
    var spot = document.getElementById(validLocationId),
        span = document.createElement(span);
        span.innerHTML = gameState[gameState.currentPlayer];
        spot.appendChild(span);
    // spot.classList.add(gameState[gameState.currentPlayer]);
    gameState.gamefield[validLocationId] = gameState[gameState.currentPlayer];
    console.log(validLocationId);
}

function checkAvail (gameBoardLocation) {
   if(gameState.gamefield[gameBoardLocation] == ""){
    return true
    } else { 
    return alert("Invalid move");
    } 
}

function locateSpot() {
    var evt = window.event || evt;
    !event.target? evt.target :evt.srcElement;
    var selection = evt.target.id;
    return selection;
}
