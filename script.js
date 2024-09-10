function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

// a -> the first number
// ope -> the operator
// b -> the second number
function operate([a, ope, b]) {
  if (ope === "+") {
    return add(a, b);
  } else if (ope === "-") {
    return subtract(a, b);
  } else if (ope === "x") {
    return multiply(a, b);
  } else if (ope === "/") {
    return divide(a, b);
  } else if (ope === "%") {
    return modulus(a, b);
  }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let displayValue = [];
let isFirstNumber = true;
let isSecondNumber = false;

const display = document.querySelector(".display");
display.textContent = 0;

const Buttons = document.querySelectorAll(".buttons");

Buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("number")) {
      numberValue = event.target.value;
      if (isFirstNumber) {
        firstNumber += numberValue;
        display.textContent = firstNumber;
      } else {
        secondNumber += numberValue;
        display.textContent = secondNumber;
        isSecondNumber = true;
      }
    }

    if (event.target.classList.contains("function")) {
      functionValue = event.target.value;
      operator = functionValue;
      isFirstNumber = false;
    }

    // if user pressed negative button insert (-)
    if (isFirstNumber && event.target.id === "negative") {
      firstNumber = -firstNumber;
      display.textContent = firstNumber;
    } else if (!isFirstNumber && event.target.id === "negative") {
      secondNumber = -secondNumber;
      display.textContent = secondNumber;
    }

    displayValue = [firstNumber, operator, secondNumber];

    if (event.target.id === "clear") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      display.textContent = 0;
    }

    if (isSecondNumber && event.target.classList.contains("function")) {
      result = operate(displayValue);
      display.textContent = result;
      firstNumber = result;
      secondNumber = "";
    }

    if (event.target.id === "equal") {
      result = operate(displayValue);
      if (isFinite(result)) {
        display.textContent = result;
      } else if (!isFinite(result) && result !== undefined) {
        display.textContent = "wtf bro";
      } else if (result === undefined) {
        display.textContent = 0;
      }
    }
  });
});
