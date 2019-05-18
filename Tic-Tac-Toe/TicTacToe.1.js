var game = {
    user: "",
    computer: "",
    currentPlayer: "X", //default is the user 
    moves: 0,
    gamefield: [],
    testset: {
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
};

// initiate game 
turn(game.currentPlayer);


function turn(currentPlayer) {
    gamefield.addEventListener('click', () => {
    var evt = window.event || evt; 
    !evt.target ? evt.target : evt.srcElement;
    var gamefieldselect = evt.target.id;
    // console.log(evt.target.id);
    var selection = evt.target.id;
    if(game.gamefield.includes(selection)) {
        window.alert("you can't move there");
        //I can use object method to deduct game values array.
    } 
    else {
        addMark(selection, game.currentPlayer);
        game.gamefield.push(gamefieldselect);
        game.testset[gamefieldselect] = game.currentPlayer;
        console.log(game.testset);
    }
    game.currentPlayer === "O"? game.currentPlayer = "X" : game.currentPlayer = "O";
    game.moves++;
    game.moves > 5 ? confirmWin() : console.log("continue playing");
    if(game.moves === 9) alert("game over"); 
    console.log(game.moves);
    });
}

function addMark(selection, currentPlayer) {
    // var icon = document.createElement("i");
//if no internet availabe:
    var icon = document.createElement("span");
    
    if(game.currentPlayer === "X") {
        icon.classList.add("fas", "fa-times", "select", "fa-5x");
        icon.innerHTML = "X";
    } 
    else if(game.currentPlayer === "O") {
        icon.classList.add("far", "fa-circle", "select", "fa-5x");
        icon.innerHTML = "O";

    }
    document.getElementById(selection).appendChild(icon);
}

function confirmWin() {
    var gamewinArr = Object.values(game.testset);
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
         console.log(`winner, ganger! on line: ${horizontal.findIndex( found => { return found === vertical[i]}) + 1}`);
         return alert("game over!");
        }
    else {
        console.log("nothing");
        }   
    }
}

document.getElementById("restartBtn").onclick = () => { location.reload();};