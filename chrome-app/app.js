const loginfoam = document.querySelector("#login_foam");

const loginInput = loginfoam.querySelector("input");
const loginButton = loginfoam.querySelector("button");

// const loginInput1 = loginfoam.querySelector("#login_foam input");
// const loginButton2 = loginfoam.querySelector("#login_foam button");

function handleBtnClick() {
  console.log(loginInput.value);
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", handleBtnClick);
1