let bgColorEl = document.getElementById("bgColorInput");
let fontColorEl = document.getElementById("fontColorInput");
let fontSizeEl = document.getElementById("fontSizeInput");
let fontWeightEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusEl = document.getElementById("borderRadiusInput");

let applyButtonEl = document.getElementById("applyButton");
let customButtonEl = document.getElementById("customButton");

applyButtonEl.onclick = function() {
    customButtonEl.style.backgroundColor = bgColorEl.value;
    customButtonEl.style.color = fontColorEl.value;
    customButtonEl.style.fontSize = fontSizeEl.value;
    customButtonEl.style.fontWeight = fontWeightEl.value;
    customButtonEl.style.padding = paddingInputEl.value;
    customButtonEl.style.borderRadius = borderRadiusEl.value;
};