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