const addressForm = document.querySelector(".contact-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const address = document.querySelector("#address");
const postalCode = document.querySelector("#postalcode");
const town = document.querySelector("#town");
const email = document.querySelector("#emailaddress");
const phoneNumber = document.querySelector("#phonenumber");

const billingForm = document.querySelector(".billing-form");
const cardholder = document.querySelector("#cardholder");
const cardNumber = document.querySelector("#cardnumber");
const expirationDate = document.querySelector("#expirationdate");
const ccv = document.querySelector("#ccv");

const firstNameError = document.querySelector("#firstNameError");

// Click event for displaying error messages after clicking out of the input field firstName
// https://www.codegrepper.com/code-examples/javascript/click+on+input+and+click+outside+then+show+error
// Make into function
// const ignoreClickOnFirstName = firstName;

// document.addEventListener("click", function (event) {
//   event.preventDefault();
//   const isClickedInsideElement = firstName.contains(event.target);
//   if (!isClickedInsideElement && checkLength(firstName.value, 1)) {
//     firstNameError.style.display = "flex";
//   } else {
//     firstNameError.style.display = "none";
//   }
// });

//Show error message
// document.addEventListener("click", function (event) {
//   event.preventDefault();
//   const isClickedInsideLastName = lastName.contains(event.target);
//   if (!isClickedInsideLastName && checkLength(lastName.value, 1)) {
//     lastNameError.style.display = "flex";
//   } else {
//     lastNameError.style.display = "none";
//   }
// });

// document.addEventListener("click", function (event) {
//   event.preventDefault();
// });

// function validateInput(event) {
//   event.preventDefault();

//   document.addEventListener("click");
// }

// function validateForm(event) {
//     event.preventDefault();

// }

// function submitForm(event) {
//     event.preventDefault();

//     if(
//         checkLength(firstName).value, 1) &&
//         checkLength(lastName).value, 1) &&
//         checkLength(address).value, 1) &&
//         checkLength()

// )
// }

// check the length of inputs
// value = length of the input
// len = the minimum length needed
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

// validate postal code
function validatePostalCode(value) {
  if ((value.trim().length = 4)) {
    return true;
  } else {
    return false;
  }
}

// fuction for validating email (expression found at https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript)
function validateEmail(email) {
  const regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const matchEmail = regEx.test(email);
  return matchEmail;
}
