const operators = document.querySelectorAll(".btn-op");
const numbers = document.querySelectorAll(".btn-num");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

const display = document.querySelector(".display");

operators.forEach((op) => {
    op.addEventListener("click", () => {
        let operatorPressed = op.dataset.op;
        let currentDisplay = display.textContent;
        
        let lastDisplayElement = (currentDisplay.length) -1;
        if (currentDisplay[lastDisplayElement] == "+" || currentDisplay[lastDisplayElement] == "-" || currentDisplay[lastDisplayElement] == "/" || currentDisplay[lastDisplayElement] == "x"){
            display.textContent = currentDisplay;
        } else if (currentDisplay == 0){
            display.textContent == currentDisplay;
        } else {
            display.textContent = currentDisplay + " " + operatorPressed;
        }

        operationSystem(operatorPressed, currentDisplay);
    })
})

function operationSystem(op, display){

}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let pressedNumber = number.dataset.value;
        showCurrentPressedNum(pressedNumber);
    });
});

function showCurrentPressedNum(num){
    let numsAccumulated = display.textContent;
    if (numsAccumulated == 0){
        display.textContent = num;
    } else {
        display.textContent = numsAccumulated + num;
    }
}

clear.addEventListener("click", () => {
    display.textContent = "";
})