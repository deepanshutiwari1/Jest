const { add, divide, multiply, subtract } = require("./utils/math");

function calculate(a, b, operation) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "divide") {
    divide(a, b);
  } else if (operation === "multiply") {
    multiply(a, b);
  } else if (operation === "subtract") {
    subtract(a, b);
  } else {
    throw new Error("Invalid Operation!  ");
  }
}

module.exports = { calculate };
