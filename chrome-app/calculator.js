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
};

const plusResult = calculator.plus(2, 3);
console.log(plusResult); // 5
const minusResult = calculator.minus(plusResult, 2);
console.log(minusResult); // 5-2 = 3
const timeResult = calculator.time(minusResult, 3);
console.log(timeResult); // 3*3 = 9

//
const age = 96;
function calculateKrAge(ageF) {
  ageF + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);
