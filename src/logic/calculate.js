// Calculator object contains total, next and operation
import operate from "./operate";
export default function calculate(
  { total, next, operation, displayed },
  buttonName
) {
  switch (buttonName) {
    case "AC":
      displayed = false;
      total = "0";
      next = "0";
      operation = "";
      break;
    case "+/-":
      displayed = true;
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = buttonName;
      break;
    case "%":
      displayed = true;
      total = operation ? operate(total, next, operation) : next;
      operation = buttonName;
      break;
    case "=":
      displayed = true;
      total = operation ? operate(total, next, operation) : next;
      console.log(operate(total, next, operation));
      next = total;
      operation = "";
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
