function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const modalthanks = document.querySelector(".thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModals));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

function showThanks() {
  modalthanks.style.display = "block";
}

function closeThanks() {
  modalthanks.style.display = "none";
}

// close modal
function closeModals() {
  closeModal();
  closeThanks();
}

function showHideError(field, isValid) {
  if (isValid) {
    field.parentElement.setAttribute("data-error-visible", false);
  } else {
    field.parentElement.setAttribute("data-error-visible", true);    
  }
}

function showHideLocationError(field, isValid) {
  if (isValid) {
    field[0].parentElement.setAttribute("data-error-visible", false);
  } else {
    field[0].parentElement.setAttribute("data-error-visible", true);    
  }
}

function validate() {
  // validate first name field
  const firstField = document.getElementById("first");
  let isValid = firstField.value.length >= 2;
  showHideError(firstField, firstField.value.length >= 2);
  // validate last name field
  const lastField = document.getElementById("last");
  isValid = isValid && lastField.value.length >= 2;
  showHideError(lastField, lastField.value.length >= 2);
  // validate email field
  const emailField = document.getElementById("email");
  isValid = isValid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);
  showHideError(emailField, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value));
  // validate birthdate field
  const birthdateField = document.getElementById("birthdate");
  isValid = isValid && birthdateField.value.length > 0;
  showHideError(birthdateField, birthdateField.value.length > 0)
  // validate quantity field
  const quantityField = document.getElementById("quantity");
  isValid = isValid && quantityField.value.length > 0;
  showHideError(quantityField, quantityField.value.length > 0)
  // validate that at least one radio button for location is selected
  const locationBtns = document.getElementsByName("location");
  let locationSelected = false;
  locationBtns.forEach((btn) => locationSelected = locationSelected || btn.checked);
  isValid = isValid && locationSelected;
  showHideLocationError(locationBtns, locationSelected);
  // validate that the general conditions are read and accepted
  const generalConditions = document.getElementById("checkbox1");
  isValid = isValid && generalConditions.checked;
  showHideError(generalConditions, generalConditions.checked);
  if (isValid) {
    closeModal();
    showThanks();
  }
  return false;
}
