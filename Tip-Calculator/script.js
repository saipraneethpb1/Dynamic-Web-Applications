let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let calculateButtonElement = document.getElementById("calculateButton");

function calculateBtn() {
    let billAmount = billAmountElement.value;
    let percentageTip = percentageTipElement.value;

    if (billAmount === "" || percentageTip === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input.";
    } else {
        errorMessageElement.textContent = "";

        let calculatedTip = (parseInt(percentageTip) / 100) * parseInt(billAmount);

        let totalAmount = parseInt(billAmount) + calculatedTip;

        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = totalAmount;
    }
}