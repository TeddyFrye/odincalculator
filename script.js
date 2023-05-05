//Simple math items
const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(myArray) {
    let total = 0;
    for (let i = 0; i < myArray.length; i++) {
      total += myArray[i];
    }
    return total;
};

function multiply(myArray) {
  let total = 1;
  for (let i = 0; i < myArray.length; i++) {
    total *= myArray[i];
  }
  return total;
}

function power(a,b) {
  return a**b;
}

const factorial = function(myArray) {
    let result = 1;
    for (let i = 1; i <= myArray; i++) {
      result *= i;
    }
    return result;
};

//Creating the operate function
function operate(num1, operator,num2){
    switch (operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        case "**":
            return power(num1,num2);
        case "!":
            return factorial(num1,num2);
    }
}

//Making buttons do stuff
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

let num1 = null;
let num2 = null;
let operator = null;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.textContent += number.textContent;
  });
});

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    if (num1 === null) {
      num1 = Number(display.textContent);
      operator = operatorButton.dataset.operator;
      display.textContent = num1;
    } else {
      num2 = Number(display.textContent);
      const result = operate(operator, num1, num2);
      display.textContent = result;
      num1 = result;
      operator = operatorButton.dataset.operator;
      num2 = null;
    }
  });
});

equalsButton.addEventListener("click", () => {
    num2 = parseFloat(display.textContent);
    display.textContent = operate(operator,num1,num2);
});


clearButton.addEventListener("click", () => {
  display.textContent = "";
  num1 = null;
  num2 = null;
  operator = null;
});