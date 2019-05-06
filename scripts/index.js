//   COUNTDOWN TIMER

// 1. Set valid end date
    // need to get the amount of time user is inputting we will begin with 25 minutes
var minutes = document.querySelector("#minutes").innerHTML;
    seconds = document.querySelector("#seconds").innerHTML;

function pomadoro(minute, seconds) {
    pom = minute*(60000) + seconds*(1000)
    return pom;
}

var now = new Date().getTime();
var deadline = now + pomadoro(minutes, seconds);
var remainingTime = deadline - now;

if(deadline === now) {
    console.log("time is up");
}
// 2. Calculate time remaining 
// 3. Convert time to a usable format 
// 4. output the clock data as a reusable object
// 5. Display the clock on the page, and stop the clock when it reaches zero 

