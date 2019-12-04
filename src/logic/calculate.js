// Calculator object contains total, next and operation

export default function calculate({ total, next, operation }, buttonName) {
  switch (buttonName) {
    case "AC":
      total = "0";
      next = "0";
      operation = "";
      break;
    case "+/-":
      total = total * -1;
      next = total;
      operation = "";
      break;
    case "%":
      operation = "";
      break;
    case "=":
      operation = "";
      break;

    default:
      total = "";
      break;
  }
}
