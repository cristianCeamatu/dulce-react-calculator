// Calculator object contains total, next and operation
import operate from "./operate";
export default function calculate({ total, next, operation }, buttonName) {
  switch (buttonName) {
    case "AC":
      total = "0";
      next = "0";
      operation = "";
      break;
    case "+/-":
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = buttonName;
      break;
    case "%":
      total = operation ? operate(total, next, operation) : next;
      operation = buttonName;
      break;
    case "=":
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = "";
      break;

    default:
      total = "";
      break;
  }
}
