const addToCart = document.querySelector(".cta-add-to-cart");
const addedToCart = document.querySelector(".added-to-cart");
const counter = document.querySelector(".counter");

// addToCart.addEventListener("click", function onClick() {
//   addToCart.style.backgroundColor = "#5b7e0e";
//   addToCart.innerHTML = "Added";
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

function clickAdd() {}

function add() {
  addToCart.style.backgroundColor = "#5b7e0e";
  addToCart.innerHTML = "Added";
  addToCart.style.pointerEvents = "none";
}

addToCart.addEventListener("click", add);
