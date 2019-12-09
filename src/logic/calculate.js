import operate from "./operate";

function calculate({ total, next, operation, displayed }, buttonName) {
  switch (buttonName) {
    case "AC":
      total = "0";
      next = "0";
      operation = "";
      displayed = false;
      break;
    case "=":
      displayed = true;
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = "";
      if (total === "Error") total = "0";
      break;
    case "+/-":
      displayed = true;
      total = reverse(total);
      next = total;
      operation = "";
      break;
    case "/":
    case "x":
    case "-":
    case "+":
    case "%":
      displayed = true;
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = buttonName;
      if (total === "Error") {
        total = "0";
        operation = "";
      }
      break;
    default:
      next = displayed ? buttonName : numberString(next, buttonName);
      displayed = false;
      break;
  }
  return { total, next, operation, displayed };
}

function numberString(first, added) {
  const numbers = (first + added).split("");
  if (added === "." && first.split("").includes(added)) {
    return first;
  }
  if (numbers[0] === "0" && numbers.length > 1) {
    numbers.shift();
  }
  return numbers.join("");
}

function reverse(number) {
  const numbers = number.split("");
  if (numbers[0] === "-") {
    numbers.shift();
  } else {
    numbers.unshift("-");
  }
  return numbers.join("");
}

export default calculate;
