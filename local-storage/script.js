let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

let storageKey = "userInput";

let storedValue = localStorage.getItem(storageKey);

if (storedValue !== null) {
    msgEl.value = storedValue;
}

saveBtnEl.onclick = function() {
    localStorage.setItem(storageKey, msgEl.value);
};

clearBtnEl.onclick = function() {
    msgEl.value = "";
    localStorage.removeItem(storageKey);
};