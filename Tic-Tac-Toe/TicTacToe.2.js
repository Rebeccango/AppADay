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

const configForm = document.getElementById("config-form");
      ConfigFormModal = document.getElementById("gameConfigForm");
      charSelectList = document.getElementsByName("user"); // returns list
        charSelectX = document.getElementById("X"); // returns list
        charSelectY = document.getElementById("Y"); // returns list
      gameboard = document.getElementById("game-board");
      closebtn = document.querySelector(".closebtn");

function gamePlay(event) {
    console.log("this is the game function");
    gameconfig(event);
    turn(game.currentPlayer);
    if(game.moves <= 4) {
        turn();
    } 
    else {
        turn();
        checkwinner();
    }
}

configForm.onsubmit = gamePlay;

function gameconfig(event){
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
            game.gamefield[selection] = game[game.currentPlayer];
            markSpot(selection,"I");
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
    console.log("winner?");
    let gamefieldValuesArr = Object.values(game.gamefield); 
    console.log(gamefieldValuesArr);
    //vertical 
    let vertIndx = [0, 1, 2];
    let mark = gamefieldValuesArr[vertIndx[i]];
    if((gamefieldValuesArr[mark] === gamefieldValuesArr[mark + 3]) && (gamefieldValuesArr[mark] === gamefieldValuesArr[mark + 6])) {
        console.log(vertIndx.findIndex( found => {return found === vertIndx[i]})); 
        console.log(`winner, ganger! on line: ${vertIndx.findIndex( found => { return found === vertical[i]})}`);
        return alert("game over!");
   
    }

    // horizontal line


    //diagonal
}