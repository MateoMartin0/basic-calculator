const operators = document.querySelectorAll(".btn-op");
const numbers = document.querySelectorAll(".btn-num");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

const display = document.querySelector(".display");

let mathElements = {
    firstNumber : "",
    operator : "",
    secondNumber : "",
}

let currentStage = "firstNumber";

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        let numberPressed = num.dataset.value;

        if (currentStage === "firstNumber"){
            if (mathElements.firstNumber === "" || mathElements.firstNumber == "0"){
                mathElements.firstNumber = numberPressed;
            } else {
                mathElements.firstNumber = mathElements.firstNumber + numberPressed;
            }
        }
        
        if (currentStage == "secondNumber"){
            if (mathElements.secondNumber === "" || mathElements.secondNumber === "0"){
                mathElements.secondNumber = numberPressed;
            } else {
                mathElements.secondNumber = mathElements.secondNumber + numberPressed;
            }
        }

        showDisplay();
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        let operatorPressed = operator.dataset.op;
        mathElements.operator = operatorPressed;
        
        if (mathElements.firstNumber !== "") {
            currentStage = "secondNumber";
            showDisplay();
        }
    })
})

equal.addEventListener("click", () => {
    if (mathElements.secondNumber !== ""){
        let firstNumberConverted = Number(mathElements.firstNumber);
        let secondNumberConverted = Number(mathElements.secondNumber);
        let result;

        if (mathElements.operator == "+") {
            result = firstNumberConverted + secondNumberConverted;
        } else if (mathElements.operator == "-") {
            result = firstNumberConverted - secondNumberConverted;
        } else if (mathElements.operator == "x") {
            result = firstNumberConverted * secondNumberConverted;
        } else if (mathElements.operator == "/" && secondNumberConverted !== 0) {
            result = firstNumberConverted / secondNumberConverted;
        } else {
            result = "infinite";
        }

        display.textContent = result;

        mathElements.firstNumber = "";
        mathElements.operator = "";
        mathElements.secondNumber = "";
        currentStage = "firstNumber";

        if (result !== "infinite") {
            mathElements.firstNumber = result;
        }
    }
})

clear.addEventListener("click", () => {
    display.textContent = "";
    mathElements.firstNumber = "";
    mathElements.operator = "";
    mathElements.secondNumber = "";
    currentStage = "firstNumber";
})

function showDisplay (){
    if (currentStage === "firstNumber"){
        display.textContent = mathElements.firstNumber;
    } else if (currentStage === "operator") {
        display.textContent = mathElements.firstNumber + mathElements.operator;
    } else {
        display.textContent = mathElements.firstNumber + mathElements.operator + mathElements.secondNumber;
    }
}

