let numbers = [17, 31, 77, 20, 63];

function findIndexOfNumber() {
    let userInput = document.getElementById("userInput");
    let indexOfNumber = document.getElementById("indexOfNumber");

    let enteredNumber = parseInt(userInput.value);

    let index = numbers.findIndex(function(item) {
        return item === enteredNumber;
    });

    indexOfNumber.textContent = index;
}