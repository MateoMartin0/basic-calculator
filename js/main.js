const operators = document.querySelectorAll(".btn-op");
const numbers = document.querySelectorAll(".btn-num");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

const display = document.querySelector(".display");

//Represents the elements to calculate
let mathElements = {
    firstNumber : "",
    operator : "",
    secondNumber : "",
}

//represents the "expected" element
let currentStage = "firstNumber";

clear.addEventListener("click", () => {
    display.textContent = "";
})