//   COUNTDOWN TIMER

// 1. Set valid end date
// need to get the amount of time user is inputting we will begin with 25 minutes

var now = new Date().getTime();
var minutes = document.querySelector("#minutes").innerHTML;
var seconds = document.querySelector("#seconds").innerHTML;

var deadline = now + pomadoro(minutes, seconds);
var remainingTime = deadline - now;

function pomadoro(min, sec) {
    var pom = (min * 60000) + (sec * 1000);
    return pom;
}

console.log(pomadoro(25, 10));

function startCountdown(time) {
    var counter = time;

    var interval = setInterval(() => {
        console.log(counter);
        counter--;

    if(counter < 0) {
        console.log('function');

        clearInterval(interval);
        console.log('Ding!');
        };
    }, 1000);
};

startCountdown(seconds);

// 2. Calculate time remaining 
// 3. Convert time to a usable format 
// 4. output the clock data as a reusable object
// 5. Display the clock on the page, and stop the clock when it reaches zero 

