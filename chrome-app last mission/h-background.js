const imges = ["0.png", "1.png", "2.png", "3.png", "4.png"];

const randomArrNum = Math.floor(Math.random() * imges.length);

const bgimg = document.body;

bgimg.src = `img/${randomArrNum}`;

document.body.style.backgroundImage = `url('img/${imges[randomArrNum]}')`;
document.body.style.backgroundSize = "cover";
