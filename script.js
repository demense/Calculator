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

let firstNumber;
let secondNumber;
let operator;

function operate(firstNum, secondNum, ope) {
  Number(firstNum);
  Number(secondNum);
  if (ope === "+") {
    return add(firstNum, secondNum);
  } else if (ope === "-") {
    return subtract(firstNum, secondNum);
  } else if (ope === "*") {
    return multiply(firstNum, secondNum);
  } else if (ope === "/") {
    return divide(firstNum, secondNum);
  }
}

