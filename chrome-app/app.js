// const h1 = document.querySelector("#title");

// // className
// function handleTitleClick() {
//   const clickedClass = "active";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// // classList
// function handleTitleClick() {
//   if (h1.classList.contains("active")) {
//     h1.classList.remove("active");
//   } else {
//     h1.classList.add("active");
//   }
// }

// // toggle
// function handleTitleClick() {
//   h1.classList.toggle("active");
// }

// h1.addEventListener("click", handleTitleClick);

function handleBodyResize() {
  let currentWidth = window.innerWidth;
  let currentColor = window.body.color;
  if (currentWidth == window.outerWidth * 0.5) {
    currentColor = "purple";
  } else if (currentWidth == window.outerWidth * 0.9) {
    currentColor = "yellow";
  }
  document.body.style.backgroundColor = currentColor;
}

window.addEventListener("resize", handleBodyResize);
