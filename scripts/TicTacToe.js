var game = {
    user: "",
    computer: "",
    currentPlayer: "",
    moves: 1,
};

//Set game configuration for user ( x or o)

var userConfig = document.getElementById("config-form").elements.user;
var form = document.getElementById("config-form");

document.forms["config-form"].onsubmit = userSelect();

function userSelect() { 
    if(userConfig[0].checked === true) {
     game.user = userConfig[0].value;
     return console.log(game.user);
    } else if (userConfig[1].checked === true) {
     game.user = userConfig[1].value;
     return console.log(game.user);
    } else {
     return console.log('waiting for player selection');
    }
};


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