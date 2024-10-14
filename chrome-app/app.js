// const loginButton = loginfoam.querySelector("button");

// const loginInput1 = loginfoam.querySelector("#login_foam input");
// const loginButton2 = loginfoam.querySelector("#login_foam button");

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

const loginfoam = document.querySelector("#login_foam");
const loginInput = loginfoam.querySelector("input");
const greeting = document.querySelector("#hidden_h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginfoam.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginfoam.addEventListener("submit", onLoginSubmit);
