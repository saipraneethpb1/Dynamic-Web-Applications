let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonEl = document.getElementById("button");
let bgContainerEl = document.getElementById("bgContainer");

buttonEl.onclick = function() {
    let randomColor = Math.floor(Math.random() * bgColorsArray.length);
    bgContainerEl.style.backgroundColor = bgColorsArray[randomColor];
};