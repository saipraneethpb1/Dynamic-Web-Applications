let container = document.getElementById("checkBoxWithLabelContainer");

// Checkbox
let checkboxElement = document.createElement("input");
checkboxElement.type = "checkbox";
checkboxElement.id = "checkbox";
container.appendChild(checkboxElement);

// Label
let labelElement = document.createElement("label");
labelElement.id = "checkboxLabel";
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "I am learning JavaScript";
labelElement.classList.add("ml-2");

container.appendChild(labelElement);

// Strike-through functionality
checkboxElement.onclick = function() {
    labelElement.classList.toggle("checked");
};