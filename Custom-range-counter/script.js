let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let startBtn = document.getElementById("startBtn");

startBtn.onclick = function() {

    if (fromUserInput.value === "") {
        alert("Enter the From Value");
        return;
    }

    if (toUserInput.value === "") {
        alert("Enter the To Value");
        return;
    }

    let from = parseInt(fromUserInput.value);
    let to = parseInt(toUserInput.value);

    counterText.textContent = from;

    let intervalId = setInterval(function() {
        from++;

        if (from <= to) {
            counterText.textContent = from;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);

};