import { checkLength } from "./functions/form-validation.js";
import { validateEmail } from "./functions/form-validation.js";

const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#emailaddress");
const message = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const messageSuccess = document.querySelector(".message-sent");

// prevent parameters from showing up in the url
form.onsubmit = function (event) {
  event.preventDefault();

  console.log(event);
};

// functions for validating the different fileds and showing error messages
function validateName(event) {
  event.preventDefault();

  if (checkLength(name.value, 1) === true) {
    nameError.style.display = "none";
    name.classList.remove("error-outline");
  } else {
    nameError.style.display = "block";
    name.classList.add("error-outline");
  }
}

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

function validateMessage(event) {
  event.preventDefault();

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
    message.classList.remove("error-outline");
  } else {
    messageError.style.display = "block";
    message.classList.add("error-outline");
  }
}

// if the requirements are fullfilled, submit the form and show success-message
function submitForm(event) {
  event.preventDefault();

  if (
    checkLength(name.value, 2) &&
    validateEmail(email.value) &&
    checkLength(message.value, 25)
  ) {
    messageSuccess.innerHTML = `<div class="message"><p>Message sent!</p>
                                <p>We will get back to you as soon as we can.</p></div>`;

    form.reset();
  }
}

// inline error-messages and validation check when submit
name.addEventListener("keyup", validateName);
form.addEventListener("submit", validateName);
email.addEventListener("keyup", validateEmailAddress);
form.addEventListener("submit", validateEmailAddress);
message.addEventListener("keyup", validateMessage);
form.addEventListener("submit", validateMessage);

form.addEventListener("submit", submitForm);
