const containerJacketDetails = document.querySelector(
  ".container-jacket-specific"
);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const jacketId = params.get("id");

console.log(jacketId);

const url =
  "https://feulur.com/rainydays/wp-json/wc/v3/products/" +
  jacketId +
  "?consumer_key=ck_a57c66510994b10b8b0b39bb9340983f300c38ab&consumer_secret=cs_f033df458d3b8e144b3f6191f1aafa422298cbd5";

async function fetchJacket() {
  try {
    const response = await fetch(url);
    const jacketDetails = await response.json();

    createHtml(jacketDetails);
  } catch (error) {
    console.log(error);
  }
}
fetchJacket();

function createHtml(jacketDetails) {
  containerJacketDetails.innerHTML = `<div class="jacket-info"> 
                                            <div class="jacket-name">
                                                <h1>${jacketDetails.name}</h1>
                                                <h2>${jacketDetails.short_description}</h2>
                                                <h3>$${jacketDetails.price}</h3>
                                            </div>
                                        </div>`;
}
