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
