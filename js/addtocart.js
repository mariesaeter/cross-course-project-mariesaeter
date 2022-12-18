import { displayCount } from "./components/count-in-basket.js";

const addToCart = document.querySelector(".cta-add-to-cart");

// object to be sent into local storage
const jacket = {
  name: "Coastal Rain 02",
  color: "red",
  size: "S - Small",
  price: "1 999 NOK",
};

// add a product to local storage
function addJacket() {
  let local = window.localStorage.setItem("product", JSON.stringify(jacket));
  console.log(local);

  numberInCart();
}

// function for adding a counter to the local storage that counts for every click (every jacket added)
// https://www.w3schools.com/jsrEF/prop_win_localstorage.asp
function numberInCart() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  // display the count in the basket (navigation)
  displayCount();
}

addToCart.addEventListener("click", addJacket);
