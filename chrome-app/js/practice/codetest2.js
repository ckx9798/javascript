import "./styles.css";

const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);

// mine

// function handleBodyResize() {
//     let currentWidth = window.innerWidth;

//     if (currentWidth > 600 && currentWidth < 1100) {
//       document.body.style.backgroundColor = 'purple';
//     } else if (currentWidth >= 1100) {
//       document.body.style.backgroundColor = 'yellow';
//     } else {
//       document.body.style.backgroundColor = '';
//     }
//   }

//   window.addEventListener('resize', handleBodyResize);
