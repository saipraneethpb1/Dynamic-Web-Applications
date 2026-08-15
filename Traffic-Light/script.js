let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stopLightOn() {
    stopLight.style.backgroundColor = "#cf1124";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";

    stopButton.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";
}

function readyLightOn() {
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#f7c948";
    goLight.style.backgroundColor = "#4b5069";

    stopButton.style.backgroundColor = "#1f1d41";
    readyButton.style.backgroundColor = "#f7c948";
    goButton.style.backgroundColor = "#1f1d41";
}

function goLightOn() {
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#199473";

    stopButton.style.backgroundColor = "#1f1d41";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#199473";
}