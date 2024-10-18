// const loginButton = loginForm.querySelector("button");

// const loginInput1 = loginForm.querySelector("#login_foam input");
// const loginButton2 = loginForm.querySelector("#login_foam button");

// function handleBtnClick() {
//   const userName = loginInput.value;
//   console.log(userName);
//   if (userName === "") {
//     alert("Please write your name");
//   } else if (userName.length > 15) {
//     alert("write less than 15");
//   }
// }

// loginButton.addEventListener("click", handleBtnClick);

/*
const link = document.querySelector("a");

function handleLinkClick(e) {
  e.preventDefault();
  console.log(e);
  console.dir(e);
}
link.addEventListener("click", handleLinkClick);
*/

const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#hidden_h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

function paintGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove("hidden");
}
