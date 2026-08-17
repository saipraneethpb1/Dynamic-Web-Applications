let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let itemListContainer = document.getElementById("itemListContainer");

for (let item of itemList) {

    let liElement = document.createElement("li");
    liElement.id = "item" + item.uniqueNo;
    liElement.classList.add("mb-3");

    itemListContainer.appendChild(liElement);

    // Item name
    let spanElement = document.createElement("span");
    spanElement.textContent = item.itemName;

    liElement.appendChild(spanElement);

    // Cancel button
    let buttonElement = document.createElement("button");
    buttonElement.id = "button" + item.uniqueNo;
    buttonElement.textContent = "Cancel";
    buttonElement.classList.add("btn", "btn-danger", "ml-3");

    liElement.appendChild(buttonElement);

    // Remove item
    buttonElement.onclick = function() {
        itemListContainer.removeChild(liElement);
    };
}