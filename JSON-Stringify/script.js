let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainerElement = document.getElementById("jsonContainer");
let bikesString = JSON.stringify(bikes);
let personString = JSON.stringify(person);
let todosString = JSON.stringify(todos);

// Create elements
let bikesEl = document.createElement("p");
let personEl = document.createElement("p");
let todosEl = document.createElement("p");

// Set text content
bikesEl.textContent = bikesString;
personEl.textContent = personString;
todosEl.textContent = todosString;

// Optional styling to match the design
bikesEl.style.backgroundColor = "#f3f3f3";
bikesEl.style.padding = "20px";
bikesEl.style.borderRadius = "12px";

personEl.style.backgroundColor = "#f3f3f3";
personEl.style.padding = "20px";
personEl.style.borderRadius = "12px";

todosEl.style.backgroundColor = "#f3f3f3";
todosEl.style.padding = "20px";
todosEl.style.borderRadius = "12px";

// Append to container
jsonContainerElement.appendChild(bikesEl);
jsonContainerElement.appendChild(personEl);
jsonContainerElement.appendChild(todosEl);