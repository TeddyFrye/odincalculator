const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let num1 = "";
let num2 = "";
let operator = "";

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", handleClick);
});

// Handle button click
function handleClick(event) {
  const value = event.target.textContent;
  
  if (value >= "0" && value <= "9") {
    handleNumber(value);
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    handleOperator(value);
  } else if (value === "=") {
    handleEquals();
  } else if (value === "C") {
    handleClear();
  } else if (value === ".") { // Check for decimal button
    handleDecimal();
  }
}

// Handle number button click
function handleNumber(value) {
  if (operator === "") {
    num1 += value;
    display.textContent = num1;
  } else {
    num2 += value;
    display.textContent = num2;
  }
}

// Add support for decimal point
function handleDecimal() {
  if (operator === "") {
    if (!num1.includes(".")) { // Check if decimal point already exists
      num1 += ".";
      display.textContent = num1;
    }
  } else {
    if (!num2.includes(".")) {
      num2 += ".";
      display.textContent = num2;
    }
  }
}

// Handle operator button click
function handleOperator(value) {
  operator = value;
}

// Handle equals button click
function handleEquals() {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      result = "";
  }

  display.textContent = result;
  num1 = result.toString();
  num2 = "";
  operator = "";
}


// Handle clear button click
function handleClear() {
  num1 = "";
  num2 = "";
  operator = "";
  display.textContent = "";
}
