const h1 = document.querySelector(".sayhi");

// function handleTitleClick() {
//   if (h1.style.color === "blue") {
//     h1.style.color = "tomato";
//   } else {
//     h1.style.color = "blue";
//   }
// }

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
