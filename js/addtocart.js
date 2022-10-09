// export const counter = document.querySelector(".counter");
// export const counterBackground = document.querySelector(".cart-count");
import { displayCount } from "./components/count-in-basket.js";

const addToCart = document.querySelector(".cta-add-to-cart");
const addedToCart = document.querySelector(".added-to-cart");

// addToCart.addEventListener("click", function onClick() {
//   addToCart.style.backgroundColor = "#5b7e0e";
//   addToCart.innerHTML = "Added";s
//   addToCart.style.pointerEvents = "none";
// });

// let count = 0;

// function add() {
//   const interval = setInterval(function () {
//     addToCart.style.backgroundColor = "#5b7e0e";
//     addToCart.innerHTML = "Added";
//     addToCart.style.pointerEvents = "none";

//     count++;
//     if (count === 2) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// addToCart.addEventListener("click", add);

// function clickAdd() {}

// function add() {
//   addToCart.style.backgroundColor = "#5b7e0e";
//   addToCart.innerHTML = "Added";
//   addToCart.style.pointerEvents = "none";
// }

// addToCart.addEventListener("click", add);
// let cartCount = 0;

// addToCart.addEventListener("click", (event) => {

// } )

const jacket = {
  name: "Coastal Rain 02",
  color: "red",
  size: "S - Small",
  price: "1 999 NOK",
};

// addToCart.forEach((click) => {
//   click.addEventListener("click", addJacket);
// });

function addJacket() {
  let local = window.localStorage.setItem("product", JSON.stringify(jacket));
  console.log(local);

  numberInCart();
}

// function for adding the number of count to the basket counter
// https://www.w3schools.com/jsrEF/prop_win_localstorage.asp
function numberInCart() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
    // counter.style.display = "block";
    // counterBackground.style.display = "block";
  } else {
    localStorage.clickcount = 1;
  }
  displayCount();
  //   newCount;

  //displayCount();
}
// export const newCount = (counter.innerHTML = localStorage.clickcount);

addToCart.addEventListener("click", addJacket);
