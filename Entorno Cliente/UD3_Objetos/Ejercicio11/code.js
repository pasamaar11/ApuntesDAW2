let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function setOperator(op) {
  if (currentInput === "") {
    return "";
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  if (operator === "+") {
    result = parseFloat(previousInput) + parseFloat(currentInput);
  } else if (operator === "-") {
    result = parseFloat(previousInput) - parseFloat(currentInput);
  } else if (operator === "*") {
    result = parseFloat(previousInput) * parseFloat(currentInput);
  } else if (operator === "/") {
    result = parseFloat(previousInput) / parseFloat(currentInput);
  }

  document.getElementById("display").value = result;
  currentInput = result.toString();
  operator = "";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculateSqrt() {
  if (currentInput === "") {
    return "";
  }

  let result = Math.sqrt(parseFloat(currentInput));
  document.getElementById("display").value = result;

  currentInput = result.toString;
}
