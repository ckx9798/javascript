const numrange = document.querySelector("#number_range");
const usernum = document.querySelector("#user_select");

const machineBtn = document.querySelector("#machine_btn");
const hiddenhtml = document.querySelector(".hidden");

const form = document.querySelector("form");
const playBtn = document.querySelector("#play_btn");

function handleSubmt(e) {
  e.preventDefault();
  localStorage.setItem("numrange", numrange.value);
  hiddenhtml.classList.remove("hidden");
  document.querySelector("#user_chose").innerText = usernum.value;
  const rangeNum = parseInt(numrange.value);
  const randomRange = Math.floor(Math.random() * rangeNum);
  document.querySelector("#machine_chose").innerText = randomRange;
  const result = document.querySelector("#result");
  if (usernum.value > randomRange) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

form.addEventListener("submit", handleSubmt);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <h1>Random Number Game</h1>
//     <form>
//         <h2>Generate a number between 0 and</h2>
//         <input required id="number_range"/>
//         <h3>Guess the number:</h3>
//         <input id="user_select" />
//         <button id="play_btn">Play!</button>
//     </form>

//     <div class="hidden">
//       <h3> You chose: <span id="user_chose"></span>,
//         the machine chose: <span id="machine_chose"></span></div>
//       <h2 id="result"> You won! </h2>
//     </div>
//   </body>
//   <script src="app.js"></script>
// </html>
