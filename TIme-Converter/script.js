let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", function() {

    if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of hours.";
        timeInSeconds.textContent = "";
        return;
    }

    if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes.";
        timeInSeconds.textContent = "";
        return;
    }

    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);

    let seconds = hours * 3600 + minutes * 60;

    timeInSeconds.textContent = seconds + "s";
    errorMsg.textContent = "";
});