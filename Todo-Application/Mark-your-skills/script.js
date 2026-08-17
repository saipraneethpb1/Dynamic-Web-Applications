let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let skillsListContainer = document.getElementById("skillsListContainer");

for (let skill of skillList) {

    let liElement = document.createElement("li");
    skillsListContainer.appendChild(liElement);

    // Checkbox
    let checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.id = "checkbox" + skill.uniqueNo;

    liElement.appendChild(checkboxElement);

    // Label
    let labelElement = document.createElement("label");
    labelElement.id = "label" + skill.uniqueNo;
    labelElement.setAttribute("for", "checkbox" + skill.uniqueNo);
    labelElement.textContent = skill.skillName;
    labelElement.classList.add("ml-2");

    liElement.appendChild(labelElement);

    // Toggle color
    checkboxElement.onclick = function() {
        labelElement.classList.toggle("checked");
    };
}