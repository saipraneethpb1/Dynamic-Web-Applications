let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");

// Create checkbox
let checkboxElement = document.createElement("input");
checkboxElement.type = "checkbox";
checkboxElement.id = "checkbox";

checkboxWithLabelContainer.appendChild(checkboxElement);

// Create label
let labelElement = document.createElement("label");
labelElement.id = "checkboxLabel";
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "Click Me!";

checkboxWithLabelContainer.appendChild(labelElement);