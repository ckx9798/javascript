const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "" && maxNumber === "") {
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);

/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Random Number Game</h1>
    <div>
      <h3 class="js-title">
        Generate a number between 0 and <input id="maxNumber" type="number" />
      </h3>
    </div>
    <form id="js-guess">
      <label>Guess the number:</label>
      <input type="number" max="200" min="5" />
      <button>Play!</button>
    </form>
    <div id="js-result">
      <span></span>
    </div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
*/
