import Big from "big-js";

export default function operate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return percent(num1, num2);
    case "+/-":
      return reverse(num1);
    default:
      break;
  }
}

function add(num1, num2) {
  return Big(num1)
    .plus(num2)
    .toString();
}

function substract(num1, num2) {
  return Big(num1)
    .minus(num2)
    .toString();
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error";
  } else {
    return Big(num1)
      .div(num2)
      .toString();
  }
}

function multiply(num1, num2) {
  return Big(num1)
    .times(num2)
    .toString();
}

function percent(num1, num2) {
  return Big(num1)
    .div(100)
    .times(num2)
    .toString();
}

function reverse(num1) {
  return Big(num1)
    .times(-1)
    .toString();
}
