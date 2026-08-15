let firstNumEl = document.getElementById("firstNumber");
let secondNumEl = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

let firstRandomNumber = Math.ceil(Math.random() * 100);
let secondRandomNumber = Math.ceil(Math.random() * 100);

firstNumEl.textContent = firstRandomNumber;
secondNumEl.textContent = secondRandomNumber;

let checkButtonEl = document.getElementById("checkButton");

checkButtonEl.onclick = function() {
    let userAnswer = parseInt(userInputEl.value);

    if (userAnswer === firstRandomNumber + secondRandomNumber) {
        gameResultEl.textContent = "Congratulation! You got it right.";
        gameResultEl.style.backgroundColor = "#028a0f";
    } else {
        gameResultEl.textContent = "Please Try Again!";
        gameResultEl.style.backgroundColor = "#1e217c";
    }
};

let restartButtonEl = document.getElementById("restartButton");

restartButtonEl.onclick = function() {
    firstRandomNumber = Math.ceil(Math.random() * 100);
    secondRandomNumber = Math.ceil(Math.random() * 100);

    firstNumEl.textContent = firstRandomNumber;
    secondNumEl.textContent = secondRandomNumber;

    userInputEl.value = "";
    gameResultEl.textContent = "";
    gameResultEl.style.backgroundColor = "#f5f7fa";
};