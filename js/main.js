const operators = document.querySelectorAll(".btn-op");
const numbers = document.querySelectorAll(".btn-num");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

const display = document.querySelector(".display");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let pressedNumber = number.dataset.value;
        showCurrentPressedBtn(pressedNumber);
    });
});

function showCurrentPressedBtn(button){
    let btnsAccumulated = display.textContent;
    if (btnsAccumulated == 0){
        display.textContent = button;
    } else {
        display.textContent = btnsAccumulated + button;
    }
    
}