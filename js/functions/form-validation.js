// check the length of inputs
// value = length of the input
// len = the minimum length needed
export function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}
// validate that the input is whole numbers (https://digitalfortress.tech/tips/top-15-commonly-used-regex/#google_vignette)
export function checkNumber(number) {
  const isNumber = /^\d+$/;
  const matchNumber = isNumber.test(number);
  return matchNumber;
}

// function for validating email (reg-expression from lesson javascript 1 4.4 Form validation)
export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchEmail = regEx.test(email);
  return matchEmail;
}

// function for validating inputs with specific number such as postal code
export function validateSpecificNumber(value, len) {
  if (value.trim().length === len) {
    return true;
  } else {
    return false;
  }
}
