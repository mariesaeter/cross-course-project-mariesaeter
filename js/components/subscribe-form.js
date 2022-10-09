import { validateEmail } from "../functions/form-validation.js";

const form = document.querySelector(".subscribe-form");
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const message = document.querySelector(".sub-message");

form.onsubmit = function (event) {
  event.preventDefault();
};

function validateEmailAddress(event) {
  event.preventDefault();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.classList.remove("error-outline");
  } else {
    emailError.style.display = "block";
    email.classList.add("error-outline");
  }
}

function submitForm(event) {
  event.preventDefault();

  if (validateEmail(email.value)) {
    message.innerHTML = `<div class="welcome"><p>Welcome as our newest subscriber!</p></div>`;

    form.reset();
  }
}

form.addEventListener("submit", validateEmailAddress);
form.addEventListener("submit", submitForm);
