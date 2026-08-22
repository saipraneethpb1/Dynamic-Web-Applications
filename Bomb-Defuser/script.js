let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");

let countdown = 10;

let intervalId = setInterval(function() {
    countdown--;

    if (countdown > 0) {
        timer.textContent = countdown;
    } else {
        clearInterval(intervalId);
        timer.textContent = "BOOM";
    }
}, 1000);

defuser.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && defuser.value === "defuse") {
        clearInterval(intervalId);
        timer.textContent = "You did it!";
    }
});