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

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        let numberPressed = num.dataset.value;

        if (currentStage === "firstNumber"){
            if (mathElements.firstNumber === "" || mathElements.firstNumber === "0"){
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
    })
})

//POSIBLEMENTE EL SIGUIENTE PASO SEA MOSTRAR EN EL DISPLAY
//¿CON FUNCION DEDICADA A MOSTRAR EN EL DISPLAY O CON UNA PARTICULAR PARA CADA PARTE DE LA OPERACION?

clear.addEventListener("click", () => {
    display.textContent = "";
    mathElements.firstNumber = "";
    mathElements.operator = "";
    mathElements.secondNumber = "";
})