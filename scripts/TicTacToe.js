var game = {
    user: "",
    computer: "",
    currentPlayer: "",
    moves: 1,
    gamefield: [],
};

//Set game configuration for user ( x or o)
var userConfig = document.getElementById("config-form").elements.user;
var form = document.getElementById("config-form");

form.onsubmit = userSelect;

function userSelect(event) { 
    event.preventDefault();
    if(userConfig[0].checked === true) {
    game.user = userConfig[0].id;
    game.user = userConfig[0].id;
    game.computer = userConfig[1].id;
    } 
    else if (userConfig[1].checked === true) {
    game.user = userConfig[1].id;
    game.computer = userConfig[0].id;
    }
    var userAns = prompt("Now to determine who will go first. Rock, paper, or scissors? Type your response below").charAt(0);
    form.reset();
    form.classList.add('hidden');
    firstPlayer(userAns);
    firstMove(game.currentPlayer);
    return console.log(`this is the userSelect function`);
}

// Now I need to know who will want to start, maybe implement a rock/paper scissor function 
function firstPlayer(response) {
    var options = ["rock", "paper", "scissors"],
        cpuAns = options[Math.floor(Math.random()*Math.floor(3))];
        
    switch(response) {
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
        game.currentPlayer = "user";
        window.alert(`${game.currentPlayer} won! Make your first move by selecting an available field below`);
        return console.log("user wins, user gets to move first");
    }
    else if(userAns === options[1] && cpuAns === options[0]) {
        game.currentPlayer = "user";
        window.alert(`${game.currentPlayer} won! Make your first move by selecting an available field below`);
        return console.log("user wins, user gets to move first");
    }
    else if(userAns === options[2] && cpuAns === options[1]) {
        game.currentPlayer = "user";
        window.alert(`${game.currentPlayer} won! Make your first move by selecting an available field below`);
        return console.log("user wins, user gets to move first");
    } else{
        game.currentPlayer = "computer";
        window.alert(`${game.currentPlayer} won! You will go second`);
        return console.log("userLoses, computer gets to go first");
    };    
}

function firstMove(player) {
var gamefield = document.getElementById('game-board');
gamefield.addEventListener('click', () => {console.log("it worked")});
 console.log('this is the first move, does it differ from the second or third move?');
 console.log(player);

 if(player === "computer") {
    console.log("we will need to make the field unselectable and we will need to create a function that selects a position the computer can go")
    gamefield.classList.add("cpu-turn");
    //---------------document onClick here
    gamefield.onclick = function(evt) {
        console.log("this is the newly added function");
        var evt = window.event || evt; // window.event for IE
        if (!evt.target) evt.target = evt.srcElement; // extend target property for IE
        var gameFieldselect = evt.target.id; // target is clicked
        // need to write functon to validate if move is legal and to locate that on the page and set child element ( span containing)
        console.log(gameFieldselect);
        evt.target.innerHTML = player;
        game.currentPlayer = "user";
        console.log(game.currentPlayer);
        firstMove(game.currentPlayer);
        }    
    // firstMove(game.CurrentPlayer);
    // this statement ends up in an infinit loop
  } else if(player === "user") {
    console.log("make field selectable and change class to select");
    gamefield.classList.remove("cpu-turn");
    //---------------document onClick here
    gamefield.onclick = function(evt) {
        console.log("this is the newly added function");
        var evt=window.event || evt; // window.event for IE
        if (!evt.target) evt.target=evt.srcElement; // extend target property for IE
        var gameFieldselect = evt.target.id; // target is clicked
        console.log(gameFieldselect);
        evt.target.innerHTML = player;
        console.log(evt.target.innerHTML);
        game.currentPlayer = "computer";
        console.log(game.currentPlayer);
        firstMove(game.currentPlayer);
      }
  }
}

function markfield(event) {
    
}

var resetBtn = document.getElementById("restartBtn"); 
    resetBtn.onclick = (event)=> { location.reload()};

// ===============================================================

//This will set the configurations of the game 
// function setFig(id) {
//     if (id === "X") {
//         game.user = '<span class="fa fa-times"></span>';
//         game.computer ='<span class="fa fa-circle-o></span>';
//     } else if (id === "O") {
//         game.user = '<span class="fa fa-circle-o></span>';
//         game.computer = '<span class="fa fa-times></span>';
//     }
//     firstMove();
//     setCurrPl('user');
// }

// function firstMove() {
//     $('#fifth').html(game.computer);
//     $('#fifth').removeAttr('onClick');
// }

// function setCurrPl(curr) {
//     game.currentPlayer = curr;
// }

// function icon(id) {
//     if(game.currentPlayer === 'user') {
//         $('#' + id).html(game.user);
//         $('#' + id).removeAttr('onClick');
//         gameStatus();
//         setCurrPl('computer');
//     } else if (game.currentPlayer === 'computer') {
//         $('#' + id).html(game.computer);
//         $('#' + id).removeAttr('onClick');
//         gameStatus();
//         setCurrPl('user');
//     }
//     game.moves++;
//     draw();

//     if (game.currentPlayer == 'computer') {
//         comp();
//     }
// }

// function comp() {
//     switch (true) {
//         case $('#first').html() !== game.user && $('#first').html() !== game.computer
//     }
// }