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

// fuction for validating email (expression found at https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript)
export function validateEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const matchEmail = regEx.test(email);
  return matchEmail;
}
