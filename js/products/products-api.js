const url =
  "https://feulur.com/rainydays/wp-json/wc/v3/products?consumer_key=ck_a57c66510994b10b8b0b39bb9340983f300c38ab&consumer_secret=cs_f033df458d3b8e144b3f6191f1aafa422298cbd5";

async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    // createHtml(products);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
