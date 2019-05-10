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
    var userAns = prompt("Now to determine who will go first. Rock, paper, or scissors? Type your response below").charAt(0);
    firstPlayer(userAns);
    return console.log(game);
}

// Now I need to know who will want to start, maybe implement a rock/paper scissor function 
function firstPlayer(response) {
    let options = ["rock", "paper", "scissors"],
        cpuAns = options[Math.floor(Math.random()*Math.floor(3))];
    
    console.log(`itial useransr value ${response}`);
    
    switch(response) {
        case 'r':
        userAns = 'rock';
        console.log(userAns);
        break;

        case 'p':
        userAns = 'paper';
        console.log(userAns);
        break;

        case 's':
        userAns = 'scissors';
        console.log(userAns);
        break;

        default: 
        window.alert("invalid response -- need new answer");
        userAns = prompt("Now to determine who will go first. Rock, paper, or scissors? Type your response below").charAt(0);
        firstPlayer(userAns);
    }


//     options.forEach( option => { 
//        if(option.charAt(0) === userAns){
//         // userAns = option;
//         console.log(userAns);
//    }});
}
 // need to determine who won that game
//  if(userAns === cpuAns){
//      window.alert("It's a draw!...make function to handle this case")
//  }
//  else if(userAns === "r" && cpuAns === "s" ) {
//      window.alert ("you won! you get to go first!");
//  }
//  else if(userAns === "p" && cpuAns === "r" ) {
//     window.alert ("you won! you get to go first!");
// }
// else if(userAns === "s" && cpuAns === "p" ) {
//     window.alert ("you won! you get to go first!");
// }
// else {
//     window.alert("Sorry, you lost! Computer will go first");
//     }


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