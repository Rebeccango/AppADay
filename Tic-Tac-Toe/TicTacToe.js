var game = {
    move: 0,   
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

const configForm = document.getElementById("config-form"),
      ConfigFormModal = document.getElementById("gameConfigForm"),
      charSelectList = document.getElementsByName("user"), // returns list
        charSelectX = document.getElementById("X"), // returns list
        charSelectY = document.getElementById("Y"), // returns list
      gameboard = document.getElementById("game-board"),
      closebtn = document.querySelector(".closebtn");

function gamePlay(event) {
    gameconfig(event);
    console.log("this is the game function");
    if(game.move <= 4) {
        turn(game.currentPlayer);
    } 
    else if(game.move > 4){
        turn(game.currentPlayer);
        console.log("great")
        checkwinner();
    }
}

configForm.onsubmit = gamePlay;


function gameconfig(event) {
    event.preventDefault();

    charSelectList.forEach( option => { 
        option.checked? game.player1 = option.id: game.player2 = option.id
    });

    let options = ["player1", "player2"];
    game.currentPlayer = options[Math.floor(Math.random()*Math.floor(2))];
    alert(`Through random selection, ${game.currentPlayer} will go first!`);
    
    ConfigFormModal.classList.add("hidden");
    gameboard.classList.remove("hidden");

    configForm.reset();
}

function turn(player){
    //player needs to select a spot by clicking on valid portion of the board
    gameboard.onclick = () => {
        var selection = locateSpot();
        if(checkAvail(selection)) {
            markSpot(selection,"I");
            game.gamefield[selection] = game[game.currentPlayer];
            game.currentPlayer === "player1"? game.currentPlayer = "player2" : game.currentPlayer = "player1";
            game.move++;
        } 
        else {
            alert("Invalid Selection, please select another spot");
        }
        return game; 
    }
}

function checkAvail(validElementId) {
    return game.gamefield[validElementId] == "";
}

function locateSpot() {
    var evt = window.event || window.evt;
    !event.target? evt.target:evt.srcElement;
    var selection = evt.target.id;
    return selection;
}

function markSpot(validElementId, HTMLElement) {
    //create the item, based on the player mark.    agg
    var marker = document.createElement(HTMLElement);  
    if(navigator.onLine) {
        game[game.currentPlayer] == "X"? marker.classList.add("fas", "fa-times", "fa-4x"): marker.classList.add("far", "fa-circle", "fa-4x");
    } 
    else {
        game[game.currentPlayer] == "X"? marker.innerHTML = "X": marker.innerHTML = "O";
    }
    document.getElementById(validElementId).appendChild(marker);
    return marker;
}

function checkwinner() {
    //vertical - takes every index and then adds on 3 spots
    lineWin([0, 1, 2], 3); 
    // horizontal line - takes every index in array and ads on one spot for 
    lineWin([0, 3, 6], 1);
    //diagonal
}

function lineWin( arrayOfIndex, num){
    let threeInaRow = new Set();
    let boardgameArr = Object.values(game.gamefield);
    
    for(let i = 0, len = arrayOfIndex.length; i < len; i++) {
    threeInaRow.add(boardgameArr[arrayOfIndex[i]]);
    threeInaRow.add(boardgameArr[arrayOfIndex[i] + num]);
    threeInaRow.add(boardgameArr[arrayOfIndex[i] + num + num]);
    
    threeInaRow.size === 1? alert(`Winner detected. Game over!`): threeInaRow.clear();
    }
}   

function diagonal ( cornerSquareId ) {

let center = "five";
//  corner square Id's include 
let backslash = ["one", "three"], 
test = ["seven", "nine"];
    // starting from first square 
    //starting from third square

}