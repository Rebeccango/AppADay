var game = {
    user: "",
    computer: "",
    currentPlayer: "",
    moves: 1,
};

//Set game configuration for user ( x or o)

var userConfig = document.getElementById("config-form").elements.user;
var form = document.getElementById("config-form");

form.onsubmit = userSelect;

function userSelect(event) { 
    event.preventDefault();
    if(userConfig[0].checked === true) {
    game.user = userConfig[0].id;
    game.computer = userConfig[1].id;
    } 
    else if (userConfig[1].checked === true) {
    game.user = userConfig[1].id;
    game.computer = userConfig[0].id;
    }
    firstPlayer();
    return console.log(game);
}

// Now I need to know who will want to start, maybe implement a rock/paper scissor function 
function firstPlayer(answer) {
    let options = ["r", "p", "s"],
    userAns = prompt("rock, paper, or scissors?").charAt(0),
    cpuAns = Math.random();

    if(userAns !== ("r" || "p" || "s")) {
        console.log("need new answer");
        window.alert("..that's not a valid option, please select again");
        userAns = prompt("rock, paper, or scissors?").charAt(0);
    } else {
      console.log("halp");
    }
    //will need to validate the answer of the input
    console.log('need to determine who goes first');
}


// userConfig.forEach( button =>{if(button ===)})


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