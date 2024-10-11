// const title = document.getElementById("title");

// console.log(title); //  <h1 id="title" class="sayhi">Hi Js</h1>
// console.log(title.innerText); // Hi Js

// title.innerText = "hello Js";

// console.log(title.innerText); // hello Js

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos); // HTMLCollection(5) [h2.hello, h2.hello, h2.hello, h2.hello, h2.hello]

// console.log(hellos[0]); // <h2 class="hello">hello</h2>

// console.log(document.querySelector(".hello_ h3")); //

// //

const title = document.querySelector("#title");
const color = ["green", "blue", "purple", "red"];

const superEventHandler = {
  handleMouseenter: function () {
    title.innerHTML = "The mouse is here";
    title.style.color = color[0];
  },
  handleMouseleave: function () {
    title.innerHTML = "The mouse is gone";
    title.style.color = color[1];
  },
  handleWindowSize: function () {
    title.innerHTML = `You just resized`;
    title.style.color = color[2];
  },
  handleContextmenu: function (e) {
    event.preventDefault();
    title.innerHTML = "That was a right click";
    title.style.color = color[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseenter);
title.addEventListener("mouseleave", superEventHandler.handleMouseleave);
window.addEventListener("resize", superEventHandler.handleWindowSize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
