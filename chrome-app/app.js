const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

const mon = "monday";
const tue = "tuesday";
const wed = "wednesday";
const thu = "thursday";
const fri = "friday";

const oneWeek = [mon, tue, wed, thu, fri];
console.log(oneWeek); // montuewedthufri

const playerName = "kim";
const playerPoints = 9798;
const playerId = "asd123";
const playerFat = "little bit";
const playerHandsome = true;

const player1 = {
  name: "kim",
  points: 9798,
  id: "asd123",
  handsome: true,
};

console.log(player1);
console.log(player1.name);
player1.name = "lee";
console.log(player1["name"]); // lee

player1.number = 1;
console.log(player1);

function sayHi(name) {
  console.log("hi my name is " + name);
}

sayHi("kim");

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Write positive number please");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age < 50) {
  console.log("you can drink");
} else {
  console.log("tou can not drink");
}
