const cartItemContainer = document.querySelector(".cart-item");
const jacketInfo = document.querySelector(".cart-jacket-info");
const delProduct = document.querySelector(".trash-can");

console.log(delProduct);

// let data = JSON.parse(window.localStorage.getItem("product"));
// console.log(data);

// retrieve product from local storage
function getProduct() {
  const prod = window.localStorage.getItem("product");
  return JSON.parse(prod);
}

const product = getProduct();
console.log(product);

// create html for product item
function createHtml() {
  jacketInfo.innerHTML += `<div class="cart-product">
                                    <a href="../jacket-specific.html">
                                    <h3>${product.name}</h3>
                                    <div>Color: ${product.color}</div>
                                    <div>Size: ${product.size}</div></a>
                                    </div>`;
}

const cart = createHtml(product);

// delete product from cart (not working)
function deleteProduct() {
  window.localStorage.removeItem("product");

  cartItemContainer.innerHTML = "";
  delProduct.style.display = "none";
}

delProduct.addEventListener("click", deleteProduct);
