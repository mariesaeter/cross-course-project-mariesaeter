const infoContainer = document.querySelector(".infoContainer");
const colorContainer = document.querySelector(".colorContainer");
const sizeContainer = document.querySelector(".sizeContainer");

const loader = document.querySelector(".loader");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const jacketId = params.get("id");

console.log(jacketId);

// url that includes specific jacket id
const url =
  "https://feulur.com/rainydays/wp-json/wc/v3/products/" +
  jacketId +
  "?consumer_key=ck_a57c66510994b10b8b0b39bb9340983f300c38ab&consumer_secret=cs_f033df458d3b8e144b3f6191f1aafa422298cbd5";

// API call for fetching specific jacket from men/women page
async function fetchJacket() {
  try {
    const response = await fetch(url);
    const jacketDetails = await response.json();

    createHtml(jacketDetails);
    createColorArray(jacketDetails);
    createSizeArray(jacketDetails);
  } catch (error) {
    console.log(error);
  }
}
fetchJacket();

// function for creating jacket description html
function createHtml(jacketDetails) {
  infoContainer.innerHTML = `<div class="jacket-info"> 
                                            <div class="jacket-name">
                                                <h1>${jacketDetails.name}</h1>
                                                <h2>${jacketDetails.short_description}</h2>
                                                <h3>$${jacketDetails.price}</h3>
                                            </div>
                                        </div>`;
}

// function for creating an array of the color choices
// heavily inspired by https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
function createColorArray(jacketDetails) {
  const colorArray = jacketDetails.attributes[1].options;

  console.log(colorArray);
  // create the radio inputs and group them
  colorContainer.innerHTML = colorArray
    .map(
      (
        color
      ) => `<div class=${color}><input type="radio" name="color" value="${color}" id="${color}">
                <label for="${color}"></label></div>`
    )
    .join(" ");
  // change event for choice of radio button
  const radio = document.querySelectorAll('input[name="color"]');
  for (const radioButton of radio) {
    radioButton.addEventListener("change", showSelected);
  }
  // output
  function showSelected(e) {
    console.log(e);
    if (this.checked) {
      document.querySelector(
        "#color-output"
      ).innerText = `Color: ${this.value}`;
    }
  }
}

function createSizeArray(jacketDetails) {
  const sizeArray = jacketDetails.attributes[0].options;

  console.log(sizeArray);
  // create the radio inputs and group them
  sizeContainer.innerHTML = sizeArray
    .map(
      (
        size
      ) => `<div class=${size}><input type="radio" name="size" value="${size}" id="${size}">
                  <label for="${size}">${size}</label></div>`
    )
    .join(" ");
  // change event for choice of radio button
  const radio = document.querySelectorAll('input[name="size"]');
  for (const radioButton of radio) {
    radioButton.addEventListener("change", showSelected);
  }
  // output
  function showSelected(e) {
    console.log(e);
    if (this.checked) {
      document.querySelector("#size-output").innerText = `Size: ${this.value}`;
    }
  }
}

// creating radio buttons
// Inspiration: https://softauthor.com/javascript-dynamic-html-radio-button/
// for (let color of colorArray) {
//   let label = document.createElement("label");

//   let input = document.createElement("input");
//   input.type = "radio";
//   input.name = "color";
//   input.value =

//   // input.addEventListener("change", () => {
//   //   Object.keys(colorArray).forEach((color) => {
//   //     colorArray[color] = false;
//   //   });
//   //   colorArray[color] = true;
//   // });
//   label.appendChild(input);

//   colorContainer.appendChild(label);
// }