const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input:first-child");
const pwInput = document.querySelector(".login_form input:last-child");
const hiddenH1 = document.querySelector("#login_id");

const HIDDEN_CLASNAME = "hidden";

function handleLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASNAME);
  const userName = loginInput.value;
  localStorage.setItem("id", userName);
  paintGreeting(userName);
}

loginForm.addEventListener("submit", handleLoginSubmit);

function paintGreeting(userName) {
  hiddenH1.innerText = `Hello, ${userName}`;
  hiddenH1.classList.remove(HIDDEN_CLASNAME);
}

const userId = localStorage.getItem("id");
if (userId === null) {
  loginForm.classList.remove(HIDDEN_CLASNAME);
} else {
  hiddenH1.classList.remove(HIDDEN_CLASNAME);
  paintGreeting(userId);
}
