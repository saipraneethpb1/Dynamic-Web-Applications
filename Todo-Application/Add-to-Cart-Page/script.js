let rowElement = document.querySelector(".row");

// Heading
let headingElement = document.createElement("h1");
headingElement.textContent = "Add To Cart";
headingElement.classList.add("col-12", "text-center");
rowElement.appendChild(headingElement);

// Input
let inputElement = document.createElement("input");
inputElement.id = "cartItemTextInput";
inputElement.type = "text";
rowElement.appendChild(inputElement);

// Button
let buttonElement = document.createElement("button");
buttonElement.id = "addBtn";
buttonElement.textContent = "Add";
buttonElement.classList.add("btn", "btn-primary", "ml-3");
rowElement.appendChild(buttonElement);

// Cart heading
let cartHeadingElement = document.createElement("h2");
cartHeadingElement.textContent = "My Cart items";
cartHeadingElement.classList.add("col-12", "mt-4", "text-center");
rowElement.appendChild(cartHeadingElement);

// List
let ulElement = document.createElement("ul");
ulElement.classList.add("col-12");
rowElement.appendChild(ulElement);

// Button functionality
buttonElement.onclick = function() {
    let liElement = document.createElement("li");
    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);

    inputElement.value = "";
};