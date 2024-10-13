const calculator = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero is not allowed!";
    }
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
  powerOf(a, b) {
    return a ** b;
  },
  squareRoot(a) {
    if (a < 0) {
      return "Error: Negative number square root is not real!";
    }
    return Math.sqrt(a);
  },
  absolute(a) {
    return Math.abs(a);
  },
  modulus(a, b) {
    return a % b;
  },
  percentage(a, b) {
    return (a / b) * 100;
  },
  exponent(a, b) {
    return Math.exp(b * Math.log(a));
  },
};

const plusResult = calculator.plus(2, 3);
console.log("Plus:", plusResult); // 5
const minusResult = calculator.minus(plusResult, 2);
console.log("Minus:", minusResult); // 5 - 2 = 3
const multiplyResult = calculator.multiply(minusResult, 3);
console.log("Multiply:", multiplyResult); // 3 * 3 = 9
const sqrtResult = calculator.squareRoot(16);
console.log("Square Root:", sqrtResult); // √16 = 4
const absResult = calculator.absolute(-20);
console.log("Absolute:", absResult); // |-20| = 20
const modulusResult = calculator.modulus(10, 3);
console.log("Modulus:", modulusResult); // 10 % 3 = 1
const percentResult = calculator.percentage(50, 200);
console.log("Percentage:", percentResult + "%"); // 50 is 25% of 200
const exponentResult = calculator.exponent(2, 3);
console.log("Exponent:", exponentResult); // 2 ^ 3 = 8

const age = 96;
function calculateKrAge(ageF) {
  return ageF + 2;
}
const krAge = calculateKrAge(age);
console.log("Korean Age:", krAge); // 98
