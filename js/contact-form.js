import { checkLength } from "./functions/form-validation.js";
import { validateEmail } from "./functions/form-validation.js";

const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#emailaddress");
const message = document.querySelector("#message");
const subject = document.querySelector("#question-theme");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const messageSuccess = document.querySelector(".message-sent");
const button = document.querySelector("button");

form.onsubmit = function (event) {
  event.preventDefault();

  console.log(event);
};

// function validateForm(event) {
//   event.preventDefault();

//   if (checkLength(name.value, 1) === true) {
//     nameError.style.display = "none";
//     name.classList.remove("error-outline");
//   } else {
//     nameError.style.display = "block";
//     name.classList.add("error-outline");
//   }

//   if (validateEmail(email.value) === true) {
//     emailError.style.display = "none";
//     email.classList.remove("error-outline");
//   } else {
//     emailError.style.display = "block";
//     email.classList.add("error-outline");
//   }

//   if (checkLength(message.value, 25) === true) {
//     messageError.style.display = "none";
//     message.classList.remove("error-outline");
//   } else {
//     messageError.style.display = "block";
//     message.classList.add("error-outline");
//   }
// }

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

name.addEventListener("keyup", validateName);
form.addEventListener("submit", validateName);
email.addEventListener("keyup", validateEmailAddress);
form.addEventListener("submit", validateEmailAddress);
message.addEventListener("keyup", validateMessage);
form.addEventListener("submit", validateMessage);

form.addEventListener("submit", submitForm);
