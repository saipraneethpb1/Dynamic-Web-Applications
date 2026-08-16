let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let recipeTitleElement = document.querySelector(".recipe-title");
recipeTitleElement.textContent = recipeObj.title;

let imageElement = document.querySelector("img");
imageElement.src = recipeObj.imgSrc;
imageElement.classList.add("w-100");

let ingredientsListElement = document.querySelector("ul");

for (let ingredient of recipeObj.ingredients) {
    let listItemElement = document.createElement("li");
    listItemElement.textContent = ingredient;
    listItemElement.style.color = "white";
    ingredientsListElement.appendChild(listItemElement);
}