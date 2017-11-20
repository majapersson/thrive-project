const splash = document.querySelector('.splash');

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

if (window.innerWidth > 600){
window.addEventListener("DOMContentLoaded", scrollLoop, false);
}

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * 0.5, splash);
  requestAnimationFrame(scrollLoop);
}
