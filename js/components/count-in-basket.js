const counter = document.querySelector(".counter");
const counterBackground = document.querySelector(".cart-count");

//import { newCount } from "../addtocart.js";

export function displayCount() {
  if (localStorage.clickcount) {
    counter.style.display = "block";
    counterBackground.style.display = "block";
    counter.innerHTML = localStorage.clickcount;
  } else {
    counter.style.display = "none";
    counterBackground.style.display = "none";
  }
}

displayCount();
