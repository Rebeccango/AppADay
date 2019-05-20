var gameState = {
    user: "",
    computer: "",
    currentPlayer: "X", //default is the user 
    moves: 0,
    gamefield: [],
    gameBoard: {
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
};      

var title = document.getElementById("title");   
var form = document.getElementById("config-form"),
 gamefield = document.getElementById("game-board");

document.getElementById("restartBtn").onclick = () => { location.reload();};

form.onsubmit = (event) => {
event.preventDefault();

if(document.getElementById("X").checked) {
    gameState.user  = "X";
    gameState.computer = "O";
} else {
    gameState.user  = "O";
    gameState.computer = "X";
}
form.reset();
form.classList.add('hidden');
document.getElementById('gameConfigForm').classList.add('hidden');
gamefield.classList.remove('hidden');
var answer = prompt("Rock,paper or scissors?").charAt(0);
console.log(answer);
firstPlayer(answer);
};

function firstPlayer(ans) {
var options = ["rock", "paper", "scissors"],
cpuAns = options[Math.floor(Math.random()*Math.floor(3))];

switch(ans) {
    case 'r':
    userAns = options[0];
    console.log(`${userAns} vs. ${cpuAns}`);
    break;

    case 'p':
    userAns = options[1];
    console.log(`${userAns} vs. ${cpuAns}`);
    break;

    case 's':
    userAns = options[2];
    console.log(`${userAns} vs. ${cpuAns}`);
    break;

    default: 
    window.alert("invalid response -- need new answer");
    userAns = "";
    userAns = alert("Now to determine who will go first. Rock, paper, or scissors? Type your response below").charAt(0);
    firstPlayer(userAns);
}

if(userAns === cpuAns){
    window.alert("its a draw");
    userAns = prompt("Now to determine who will go first. Rock, paper, or scissors? Type your response below").charAt(0) || "";
    firstPlayer(userAns);
} else if(userAns === options[0] && cpuAns === options[1]) {
    gameState.currentPlayer = gameState.user;
    window.alert(`${gameState.currentPlayer} won! Make your first move by selecting an available field below`);
    return console.log("user wins, user gets to move first");
}
else if(userAns === options[1] && cpuAns === options[0]) {
    gameState.currentPlayer = gameState.user;
    window.alert(`${gameState.currentPlayer} won! Make your first move by selecting an available field below`);
    return console.log("user wins, user gets to move first");
}
else if(userAns === options[2] && cpuAns === options[1]) {
    gameState.currentPlayer =  gameState.user;
    window.alert(`${gameState.currentPlayer} won! Make your first move by selecting an available field below`);
    return console.log("user wins, user gets to move first");
} else{
    gameState.currentPlayer = gameState.computer;
    window.alert(`${gameState.currentPlayer} won! You will go second`);
    return console.log("userLoses, computer gets to go first");
};    
}

turn(gameState.currentPlayer);


function turn(currentPlayer) {
gamefield.addEventListener('click', () => {
    var evt = window.event || evt; 
    !evt.target ? evt.target : evt.srcElement;
    var gamefieldselect = evt.target.id;
// console.log(evt.target.id);
var selection = evt.target.id;
if(gameState.gamefield.includes(selection)) {
    window.alert("you can't move there");
    //I can use object method to deduct game values array.
} 
else {
    addMark(selection, gameState.currentPlayer);
    gameState.gamefield.push(gamefieldselect);
    gameState.gameBoard[gamefieldselect] = gameState.currentPlayer;
    console.log(gameState.gameBoard);
}
gameState.currentPlayer === "O"? gameState.currentPlayer = "X" : gameState.currentPlayer = "O";
gameState.moves++;
gameState.moves > 5 ? confirmWin() : console.log("continue playing");
if(gameState.moves === 9) alert("game over"); 
console.log(gameState.moves);
});
}

function addMark(selection, currentPlayer) {
// var icon = document.createElement("i");
//if no internet availabe:
var icon = document.createElement("span");

if(gameState.currentPlayer === "X") {
    icon.classList.add("fas", "fa-times", "select", "fa-5x");
    icon.innerHTML = "X";
} 
else if(gameState.currentPlayer === "O") {
    icon.classList.add("far", "fa-circle", "select", "fa-5x");
    icon.innerHTML = "O";

}
document.getElementById(selection).appendChild(icon);
}

function confirmWin() {
var gamewinArr = Object.values(gameState.gameBoard);
console.log(gamewinArr);
//this function needs to terminate game and let player know they lost
//horizontal win is an array that contains the index values for each square in row 1
var horizontal = [0, 3, 6];
for(let i = 0, len = horizontal.length; i < len; i++) {
    let line = horizontal[i];
    
     if (horizontal[i] === "") { return ""};
     if(gamewinArr[line] === gamewinArr[line + 1] && gamewinArr[line] === gamewinArr[line + 2]){
         console.log(horizontal.findIndex( found => {return found === horizontal[i]})); 
         console.log(`winner, ganger! on row: ${horizontal.findIndex( found => { return found === horizontal[i]}) + 1}`);
         return alert(`winner, ganger! on row: ${horizontal.findIndex( found => { return found === horizontal[i]}) + 1}`);
        }
    else {
        console.log("nothing");
    }        
}
// this will be used to determine if there is a win one the vertical lines
var vertical = [0, 1, 3];
for(let i = 0, len = vertical.length; i < len; i++) {
let line = vertical[i];
 if(gamewinArr[line] === gamewinArr[line + 3] && gamewinArr[line] === gamewinArr[line + 6]){
     console.log(vertical.findIndex( found => {return found === horizontal[i]})); 
     console.log(`winner, ganger! on line: ${horizontal.findIndex( found => { return found === vertical[i]})}`);
     return alert("game over!");
    }
else {
    console.log("nothing");
    }   
}

var diagonalOne = [0, 4, 8];
var diagonalThree = [2, 4, 6];
var center = gameState.gameBoard["four"]; 

if( gameState.moves > 5 && center !== ""){
    checkDiagonal(diagonalOne);
    checkDiagonal(diagonalThree);
};

}
function checkDiagonal(array) {
var gamewinArr = Object.values(gameState.gameBoard);
let diagonal = new Set();
array.forEach( value => { diagonal.add( gamewinArr[value])});

if(diagonal.size === 1){
    return alert(`winner, gange player ${diagonal[1]} has won`)
}
}


// function cpu() {
var unoccupied = [];
//spots available is equal to the gamefields spots cross referenced with the game boardspots
gameState.gamefield.forEach( value => {
    if( gameState.gameBoard[value] == undefined) {
        unoccupied.push(value);
        console.log(unoccupied);
     };
   });
// }