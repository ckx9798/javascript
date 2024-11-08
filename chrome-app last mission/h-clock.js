const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${year}.${month}.${day} - ${hour}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);
