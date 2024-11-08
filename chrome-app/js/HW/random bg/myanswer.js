const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorBtn = document.querySelector("#color_btn");

function getRandomArrNum() {
  return Math.random() * colors.length;
}

function handleBtnClick() {
  const firstColor = colors[getRandomArrNum()];
  let secondColor = colors[getRandomArrNum()];
  while (secondColor === firstColor) {
    secondColor = colors[colors[getRandomArrNum()]];
  }
  document.body.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`;
}

colorBtn.addEventListener("click", handleBtnClick);

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="styles.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <button id="color_btn">Give me color</button>
    <script type="module" src="/main.js"></script>
  </body>
</html>

*/
