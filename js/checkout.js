const form = document.querySelector(".address-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const address = document.querySelector("#address");
const postalCode = document.querySelector("#postalcode");
const town = document.querySelector("#town");
const email = document.querySelector("#emailaddress");
const phoneNumber = document.querySelector("#phonenumber");

const billingForm = document.querySelector(".billing-form");
const cardHolder = document.querySelector("#cardholder");
const cardNumber = document.querySelector("#cardnumber");
const expirationDate = document.querySelector("#expirationdate");
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
const expirationError = document.querySelector("#expirationError");
const ccvError = document.querySelector("#ccvError");

const buttonPay = document.querySelector("#pay");

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

// //Show error message
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

//validate form version 2 (not good)
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

  if (checkNumber(postalCode.value) === true) {
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

  if (checkNumber(phoneNumber.value) === true) {
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

  if (checkLength(cardNumber.value, 1) === true) {
    cardNumberError.style.display = "none";
    cardNumber.classList.remove("error-outline");
  } else {
    cardNumberError.style.display = "block";
    cardNumber.classList.add("error-outline");
  }
}

function validateCcv(event) {
  event.preventDefault();

  if (checkNumber(ccv.value) === true) {
    ccvError.style.display = "none";
    ccv.classList.remove("error-outline");
  } else {
    ccvError.style.display = "block";
    ccv.classList.add("error-outline");
  }
}

// function validateForm(event) {
//   event.preventDefault();

//   if (checkLength(firstName.value, 1) === true) {
//     firstNameError.style.display = "none";
//     firstName.classList.remove("error-outline");
//   } else {
//     firstNameError.style.display = "block";
//     firstName.classList.add("error-outline");
//   }
//   if (checkLength(lastName.value, 1) === true) {
//     lastNameError.style.display = "none";
//   } else {
//     lastNameError.style.display = "block";
//     lastName.classList.add("error-outline");
//   }

//   if (checkLength(address.value, 3) === true) {
//     addressError.style.display = "none";
//   } else {
//     addressError.style.display = "block";
//     address.classList.add("error-outline");
//   }

//   if (checkNumber(postalCode.value) === true) {
//     postalCodeError.style.display = "none";
//   } else {
//     postalCodeError.style.display = "block";
//     postalCode.classList.add("error-outline");
//   }

//   if (checkLength(town.value, 1) === true) {
//     townError.style.display = "none";
//   } else {
//     townError.style.display = "block";
//     town.classList.add("error-outline");
//   }

//   if (validateEmail(email.value) === true) {
//     emailError.style.display = "none";
//   } else {
//     emailError.style.display = "block";
//     email.classList.add("error-outline");
//   }

//   if (checkNumber(phoneNumber.value) === true) {
//     phoneNumberError.style.display = "none";
//   } else {
//     phoneNumberError.style.display = "block";
//     phoneNumber.classList.add("error-outline");
//   }

//   if (checkLength(cardHolder.value, 1) === true) {
//     cardHolderError.style.display = "none";
//   } else {
//     cardHolderError.style.display = "block";
//     cardHolder.classList.add("error-outline");
//   }

//   if (checkNumber(cardNumber.value) === true) {
//     cardNumberError.style.display = "none";
//   } else {
//     cardNumberError.style.display = "block";
//     cardNumber.classList.add("error-outline");
//   }

//   if (checkNumber(ccv.value) === true) {
//     ccvError.style.display = "none";
//   } else {
//     ccvError.style.display = "block";
//     ccv.classList.add("error-outline");
//   }
// }

function payForm(event) {
  event.preventDefault();

  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 1) &&
    checkLength(address.value, 3) &&
    checkLength(address.value, 3) &&
    checkNumber(postalCode.value) &&
    checkLength(town.value, 1) &&
    validateEmail(email.value) &&
    checkNumber(phoneNumber.value) &&
    checkLength(cardHolder.value, 1) &&
    checkNumber(cardNumber.value) &&
    checkNumber(ccv.value)
  ) {
    console.log("Hello");
    location.href = "checkout-success.html";
  }
}

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

form.addEventListener("submit", payForm);

// buttonPay.onclick = function () {
//   location.href = "checkout-success.html";
// };

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
// function validateSpecificNumber(value) {
//   if (value.trim().length === 4) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkNumber(number) {
  const isNumber = /[0-9]/;
  const matchNumber = isNumber.test(number);
  return matchNumber;
}

// fuction for validating email (expression found at https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript)
function validateEmail(email) {
  const regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const matchEmail = regEx.test(email);
  return matchEmail;
}
