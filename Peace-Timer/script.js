let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let intervalId;

function startTimer(seconds) {
    clearInterval(intervalId);

    timerText.textContent = seconds + " seconds left";

    intervalId = setInterval(function() {
        seconds--;

        if (seconds > 0) {
            timerText.textContent = seconds + " seconds left";
        } else {
            clearInterval(intervalId);
            timerText.textContent = "Your moment is complete";
        }
    }, 1000);
}

twentySecondsBtn.onclick = function() {
    startTimer(20);
};

thirtySecondsBtn.onclick = function() {
    startTimer(30);
};

fortySecondsBtn.onclick = function() {
    startTimer(40);
};

oneMinuteBtn.onclick = function() {
    startTimer(60);
};