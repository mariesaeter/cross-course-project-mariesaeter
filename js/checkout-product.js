import { displayCount } from "./components/count-in-basket.js";

const cart = document.querySelector(".cart-container");
const jacketInfo = document.querySelector(".cart-jacket-info");
const delProduct = document.querySelector(".trash-can");
const numberInBasket = document.querySelector(".basket-number");
const emptyCart = document.querySelector(".empty-cart");
const checkoutForms = document.querySelector(".checkout-forms");

console.log(delProduct);

// retrieve product from local storage
function getProduct() {
  const prod = window.localStorage.getItem("product");
  return JSON.parse(prod);
}

const product = getProduct();
console.log(product);

// create html for product item
function createHtml() {
  if (localStorage.product) {
    cart.style.display = "flex";
    emptyCart.style.display = "none";
    checkoutForms.style.display = "block";
  }
  jacketInfo.innerHTML += `<div class="cart-product">
                                    <a href="../jacket-specific.html">
                                    <h3>${product.name}</h3>
                                    <div>Color: ${product.color}</div>
                                    <div>Size: ${product.size}</div></a>
                                    </div>`;
}

const cartHtml = createHtml(product);

// delete product from cart
function deleteProduct() {
  window.localStorage.clear();

  cart.innerHTML = ""; // remove product
  delProduct.style.display = "none"; // remove trash-can button
  emptyCart.style.display = "block";

  displayCount();
}

delProduct.addEventListener("click", deleteProduct);

// display quantity in basket on the product (not functional to add or substract)
numberInBasket.innerHTML = localStorage.clickcount;
