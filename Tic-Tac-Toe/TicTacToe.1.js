var game = {
    user: "",
    computer: "",
    currentPlayer: "X", //default is the user 
    moves: 1,
    gamefield: []
};

//Set game configuration for user ( x or o)
var form = document.getElementById("config-form");
var gamefield = document.getElementById("game-board");

form.onsubmit = (event) => {
    event.preventDefault();

    if(document.getElementById("X").checked) {
        game.user  = "X";
        game.computer = "O";
    } else {
        game.user  = "O";
        game.computer = "X";
    }
    console.log(game);
    // console.log(evt);
    turn(game.currentPlayer);
};

function turn(currentPlayer) {
    gamefield.addEventListener('click', () => {
    var evt = window.event || evt; 
    !evt.target ? evt.target : evt.srcElement;
    var gamefieldselect = evt.target.id;
    // game.gamefield 
    console.log(evt.target.id);
    var selection = evt.target.id;
    if(game.gamefield.includes(selection)) {
        window.alert("you can't move there");
    } 
    else {
        addMark(selection, game.currentPlayer);
        game.gamefield.push(gamefieldselect);
    }
    game.currentPlayer === "O"? game.currentPlayer = "X" : game.currentPlayer = "O";
    console.log(game.currentPlayer);
    game.moves++;
});
}

function addMark(selection, currentPlayer) {
    var icon = document.createElement("i");
    
    if(game.currentPlayer === "X") {
        icon.classList.add("fas", "fa-times", "select", "fa-5x");
    } 
    else if(game.currentPlayer === "O") {
        icon.classList.add("far", "fa-circle", "select", "fa-5x");
    }
    document.getElementById(selection).appendChild(icon);
}