const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};

console.log(calculator.add(2, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.minus(10, 5));
console.log(calculator.powerof(2, 3));
