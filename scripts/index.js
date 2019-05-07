//   COUNTDOWN TIMER

// Configure buttons to work in coordinance with function
// Once function is done, reset

// Get current time 
var now = new Date().getTime();
// Get deadline time (timer + current time)
var minutes = document.querySelector("#minutes").innerHTML;
var seconds = document.querySelector("#seconds").innerHTML;

function startCountdown() {
    var counterMin = document.querySelector('#minutes').innerHTML;
    var counterSec = document.querySelector('#seconds').innerHTML;

    var interval = setInterval(() => {
        document.querySelector("#seconds").innerHTML = counterSec;
        counterSec--;

        if(counterSec <= 1 && counterMin >= 1) {
                console.log(counterSec);
            counterMin--;
            document.querySelector("#minutes").innerHTML = counterMin;
            console.log(counterMin);
            counterSec = 60;
            console.log("it's been a hot minute");      
        } else if (counterSec <= 1 && counterMin < 1) {
            console.log("time is up");
            document.querySelector("#seconds").innerHTML = 00;
            document.querySelector("#minutes").innerHTML = 00;
            clearInterval(interval);
            console.log('ding');
        } 
        }, 1000);
};

// 
startCountdown();


