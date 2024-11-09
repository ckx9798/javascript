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
