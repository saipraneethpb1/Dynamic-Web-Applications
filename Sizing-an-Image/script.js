let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function increment() {

    if (defaultImageWidth >= 300) {
        warningMessageElement.textContent =
            "Too Big. Please decrease the size of the image.";
    } else {
        defaultImageWidth += 5;

        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";

        warningMessageElement.textContent = "";
    }
}

function decrement() {

    if (defaultImageWidth <= 100) {
        warningMessageElement.textContent =
            "Can't Visible. Please increase the size of the image.";
    } else {
        defaultImageWidth -= 5;

        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";

        warningMessageElement.textContent = "";
    }
}