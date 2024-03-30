//user validators
const { os, brand } = require("./validator-constants");

const validateName = (userName) =>
  userName.length !== 0 && typeof userName === "string";
const validatePassword = (password) =>
  password.length >= 8 && typeof password === "string";
const validateEmail = (email) =>
  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
const validateNumber = (number) =>
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number);

const validatePrice = (price) => {
  if (typeof price === "number" && price > 0) {
    return true;
  }
  return false;
};
const validateOs = (osType) => {
  return os.filter((a) => a === osType);
};
const validateManufacturer = (manufacturer) => {
  return brand.filter((a) => a === manufacturer);
};
const validateDescription = (description) =>
  description.length <= 100 && typeof description === "string";
module.exports = {
  validateName,
  validateEmail,
  validateNumber,
  validatePassword,
  validatePrice,
  validateOs,
  validateManufacturer,
  validateDescription,
};
