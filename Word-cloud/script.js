let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

function getRandomFontSize() {
    return Math.ceil(Math.random() * 40) + "px";
}

function createAndAppendWord(word) {
    let spanElement = document.createElement("span");

    spanElement.textContent = word;
    spanElement.style.fontSize = getRandomFontSize();
    spanElement.classList.add("m-2");

    wordsContainer.appendChild(spanElement);
}

// Display initial words
for (let word of wordCloud) {
    createAndAppendWord(word);
}

addBtn.onclick = function() {
    let userEnteredWord = userInput.value;

    if (userEnteredWord === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        errorMsg.textContent = "";

        createAndAppendWord(userEnteredWord);

        userInput.value = "";
    }
};