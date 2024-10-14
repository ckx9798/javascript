const loginfoam = document.querySelector("#login_foam");
const loginInput = loginfoam.querySelector("input");
const loginButton = loginfoam.querySelector("button");

function handleBtnClick() {
  const userName = loginInput.value;
  console.log(userName);
  if (userName === "") {
    alert("Please write your name");
  } else if (userName.length > 15) {
    alert("write less than 15");
  }
}

loginButton.addEventListener("click", handleBtnClick);
