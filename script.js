let box = document.querySelector(".box");
let moveBy = 200;
let moved = parseInt(box.style.marginLeft) || 0;

do {
  box.style.marginLeft = ++moved + "px";
} while (moved < moveBy); 