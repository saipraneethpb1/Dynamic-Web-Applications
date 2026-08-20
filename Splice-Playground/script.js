let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

updatedArray.textContent = JSON.stringify(arr);

spliceBtn.onclick = function() {
    let startIndex = startIndexInput.value;

    if (startIndex === "") {
        alert("Please enter the start index");
    } else {
        let deleteCount = deleteCountInput.value;

        if (deleteCount === "") {
            deleteCount = 0;
        }

        arr.splice(
            parseInt(startIndex),
            parseInt(deleteCount),
            itemToAddInput.value
        );

        updatedArray.textContent = JSON.stringify(arr);
    }
};