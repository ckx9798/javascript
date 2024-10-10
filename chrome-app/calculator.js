const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  time: function (a, b) {
    return a * b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
  squareRoot: function (a) {
    return Math.sqrt(a);
  },
  absolute: function (a) {
    return Math.abs(a);
  },
};

const plusResult = calculator.plus(2, 3);
console.log(plusResult); // 5
const minusResult = calculator.minus(plusResult, 2);
console.log(minusResult); // 5-2 = 3
const timeResult = calculator.time(minusResult, 3);
console.log(timeResult); // 3*3 = 9
const sqrtResult = calculator.squareRoot(16);
console.log(sqrtResult); // √16 = 4
const absResult = calculator.absolute(-20);
console.log(absResult); // |-20| = 20

const age = 96;
function calculateKrAge(ageF) {
  ageF + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);
