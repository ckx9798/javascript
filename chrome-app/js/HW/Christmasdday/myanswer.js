const clock = document.qurySelector("#clock");

function ChristmasClock() {
  const Christmas = new Date(2024, 11, 25);
  const date = new Date();
  const answer = Christmas - date;
  const days = String(Math.floor(answer / (1000 * 60 * 60 * 24))).padStart(
    2,"0");
  const hours = String(
    Math.floor((answer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((answer % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((answer % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(ChristmasClock, 1000);
