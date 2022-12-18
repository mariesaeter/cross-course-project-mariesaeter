import { checkLength } from "./functions/form-validation.js";
import { checkNumber } from "./functions/form-validation.js";
import { validateEmail } from "./functions/form-validation.js";
import { validateSpecificNumber } from "./functions/form-validation.js";

const form = document.querySelector(".address-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const address = document.querySelector("#address");
const postalCode = document.querySelector("#postalcode");
const town = document.querySelector("#town");
const email = document.querySelector("#emailaddress");
const phoneNumber = document.querySelector("#phonenumber");

const cardHolder = document.querySelector("#cardholder");
const cardNumber = document.querySelector("#cardnumber");
const ccv = document.querySelector("#ccv");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const addressError = document.querySelector("#addressError");
const postalCodeError = document.querySelector("#postalCodeError");
const townError = document.querySelector("#townError");
const emailError = document.querySelector("#emailError");
const phoneNumberError = document.querySelector("#phoneNumberError");
const cardHolderError = document.querySelector("#cardHolderError");
const cardNumberError = document.querySelector("#cardNumberError");
const ccvError = document.querySelector("#ccvError");

//validate form: one function for each form field to get the inline validation to function
function validateName(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
    firstName.classList.remove("error-outline");
  } else {
    firstNameError.style.display = "block";
    firstName.classList.add("error-outline");
  }
}

function validateLastName(event) {
  event.preventDefault();

  if (checkLength(lastName.value, 1) === true) {
    lastNameError.style.display = "none";
    lastName.classList.remove("error-outline");
  } else {
    lastNameError.style.display = "block";
    lastName.classList.add("error-outline");
  }
}

function validateAddress(event) {
  event.preventDefault();

  if (checkLength(address.value, 3) === true) {
    addressError.style.display = "none";
    address.classList.remove("error-outline");
  } else {
    addressError.style.display = "block";
    address.classList.add("error-outline");
  }
}

function validatePostalCode(event) {
  event.preventDefault();

  if (
    checkNumber(postalCode.value) === true &&
    validateSpecificNumber(postalCode.value, 4) === true
  ) {
    postalCodeError.style.display = "none";
    postalCode.classList.remove("error-outline");
  } else {
    postalCodeError.style.display = "block";
    postalCode.classList.add("error-outline");
  }
}

function validateTown(event) {
  event.preventDefault();

  if (checkLength(town.value, 1) === true) {
    townError.style.display = "none";
    town.classList.remove("error-outline");
  } else {
    townError.style.display = "block";
    town.classList.add("error-outline");
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

function validatePhoneNumber(event) {
  event.preventDefault();

  if (
    checkNumber(phoneNumber.value) === true &&
    validateSpecificNumber(phoneNumber.value, 8) === true
  ) {
    phoneNumberError.style.display = "none";
    phoneNumber.classList.remove("error-outline");
  } else {
    phoneNumberError.style.display = "block";
    phoneNumber.classList.add("error-outline");
  }
}

function validateCardHolder(event) {
  event.preventDefault();

  if (checkLength(cardHolder.value, 1) === true) {
    cardHolderError.style.display = "none";
    cardHolder.classList.remove("error-outline");
  } else {
    cardHolderError.style.display = "block";
    cardHolder.classList.add("error-outline");
  }
}

function validateCardNumber(event) {
  event.preventDefault();

  if (
    checkLength(cardNumber.value, 1) === true &&
    validateSpecificNumber(cardNumber.value, 16) === true
  ) {
    cardNumberError.style.display = "none";
    cardNumber.classList.remove("error-outline");
  } else {
    cardNumberError.style.display = "block";
    cardNumber.classList.add("error-outline");
  }
}

function validateCcv(event) {
  event.preventDefault();

  if (
    checkNumber(ccv.value) === true &&
    validateSpecificNumber(ccv.value, 3) === true
  ) {
    ccvError.style.display = "none";
    ccv.classList.remove("error-outline");
  } else {
    ccvError.style.display = "block";
    ccv.classList.add("error-outline");
  }
}

// check validation requirements and go to checkout-success if validation succeeds
function payForm(event) {
  event.preventDefault();

  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 1) &&
    checkLength(address.value, 3) &&
    checkLength(address.value, 3) &&
    checkNumber(postalCode.value) &&
    validateSpecificNumber(postalCode.value, 4) &&
    checkLength(town.value, 1) &&
    validateEmail(email.value) &&
    checkNumber(phoneNumber.value) &&
    validateSpecificNumber(phoneNumber.value, 8) &&
    checkLength(cardHolder.value, 1) &&
    checkNumber(cardNumber.value) &&
    validateSpecificNumber(cardNumber.value, 16) &&
    checkNumber(ccv.value) &&
    validateSpecificNumber(ccv.value, 3)
  ) {
    location.href = "checkout-success.html";
    window.localStorage.clear();
  }
}

// inline validation and validation on "submit"
firstName.addEventListener("keyup", validateName);
form.addEventListener("submit", validateName);
lastName.addEventListener("keyup", validateLastName);
form.addEventListener("submit", validateLastName);
address.addEventListener("keyup", validateAddress);
form.addEventListener("submit", validateAddress);
postalCode.addEventListener("keyup", validatePostalCode);
form.addEventListener("submit", validatePostalCode);
town.addEventListener("keyup", validateTown);
form.addEventListener("submit", validateTown);
email.addEventListener("keyup", validateEmailAddress);
form.addEventListener("submit", validateEmailAddress);
phoneNumber.addEventListener("keyup", validatePhoneNumber);
form.addEventListener("submit", validatePhoneNumber);
cardHolder.addEventListener("keyup", validateCardHolder);
form.addEventListener("submit", validateCardHolder);
cardNumber.addEventListener("keyup", validateCardNumber);
form.addEventListener("submit", validateCardNumber);
ccv.addEventListener("keyup", validateCcv);
form.addEventListener("submit", validateCcv);

// submit form and activate validation function to see if all requirements are met
form.addEventListener("submit", payForm);
