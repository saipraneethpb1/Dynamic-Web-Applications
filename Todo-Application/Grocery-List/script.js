let groceryList = [
    "Apples",
    "Boost Drink",
    "Butterscotch Ice Cream",
    "Tomato Ketchup",
    "Dairy Milk Chocolates",
    "Pasta"
];

let groceryListContainer = document.getElementById("groceryListContainer");

// Background
document.body.style.backgroundColor = "#03254c";

// Heading
let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.style.color = "#f5f9fd";
headingElement.style.textAlign = "center";
headingElement.style.fontFamily = "Roboto";
headingElement.style.fontSize = "60px";

groceryListContainer.appendChild(headingElement);

// Card container
let cardElement = document.createElement("div");
cardElement.style.backgroundColor = "#f5f9fd";
cardElement.style.borderRadius = "16px";
cardElement.style.padding = "30px";
cardElement.style.margin = "20px";

groceryListContainer.appendChild(cardElement);

// List
let ulElement = document.createElement("ul");

for (let item of groceryList) {
    let liElement = document.createElement("li");
    liElement.textContent = item;
    liElement.style.fontSize = "24px";
    liElement.style.margin = "15px";
    ulElement.appendChild(liElement);
}

cardElement.appendChild(ulElement);