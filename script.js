// Here are the functions for the basic math operations
function add(a, b) {
  return a + b;
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

// This is the function that operate on the given values
// a -> the first number
// b -> the second number
// ope -> the operator
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
let displayValue = [];
let isFirstNumber = true;

// Here we select the all the button that has the class ".number"
const Buttons = document.querySelectorAll(".buttons");
//
Buttons.forEach((button) => {
  button.addEventListener("click", (event, value) => {
    if (event.target.classList.contains("number")) {
      numberValue = event.target.value;
      if (isFirstNumber) {
        firstNumber += numberValue;
      } else {
        secondNumber += numberValue;
      }
    }

    if (event.target.classList.contains("function")) {
      functionValue = event.target.value;
      operator = functionValue;
      isFirstNumber = false;
    }

    displayValue = [firstNumber,operator,secondNumber];

    if (event.target.id === "equal") {
      console.log(operate(displayValue));
    }
  });
});

console.log();