const url =
  "https://feulur.com/rainydays/wp-json/wc/v3/products?consumer_key=ck_a57c66510994b10b8b0b39bb9340983f300c38ab&consumer_secret=cs_f033df458d3b8e144b3f6191f1aafa422298cbd5";

const productSection = document.querySelector(".product-section");

// call for product api to create html for featured jackets
async function getFeatured() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    productSection.innerHTML = "";
    createHtml(products);
  } catch (error) {
    console.log(error);
  }
}

getFeatured();

// function to display featured products
function createHtml(products) {
  products.forEach(function (product) {
    if (product.featured === true) {
      productSection.innerHTML += `<a href="jacket-specific.html?id=${product.id}" class = "product-card">
                                    <div class = "product-image"> <img src="${product.images[0].src}" alt = ${product.name}></div>
                                    <div class = "product-info"> 
                                        <div class = "product-name"> 
                                        <h3>${product.name}</h3>
                                        <img class="product-fav" src="images/favorite-dark.png" alt="favorite heart"></div>
                                        <h4>${product.short_description}</h4>
                                        <div class = "product-name">
                                        <p>$${product.price}</p>
                                        </div>

                                    </div>
                                </a>`;
    }
  });
}
