const images = ["0.png", "1.png", "2.png", "3.png", "4.png"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImg}`;

document.body.appendChild(bgimage);
