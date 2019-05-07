//   COUNTDOWN TIMER

// Configure buttons to work in coordinance with function
// Once function is done, reset
var setMin = document.querySelector("#minutes").innerHTML;
var setSec = document.querySelector("#seconds").innerHTML;


function startCountdown() {
    var counterMin = setMin;
    var counterSec = setSec;

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

// button controls 
    // start countdown
var startBtn = document.querySelector("#start");
    startBtn.addEventListener("click", startCountdown);

    //pause countdown 
var stopBtn = document.querySelector("#stop");

stopBtn.addEventListener("click", () => {
        pause? false : true;
        console.log(pause);
    });

    //reset
var resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", () => {
        location.reload();
    });

