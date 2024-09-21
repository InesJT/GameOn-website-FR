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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  // validate first name field
  const firstValue = document.getElementById("first").value;
  if (firstValue.length < 2) return false;
  // validate last name field
  const lastValue = document.getElementById("last").value;
  if (lastValue.length < 2) return false;
  // validate email field
  const emailValue = document.getElementById("email").value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) return false;
  // validate quantity field
  const quantityValue = document.getElementById("quantity").value;
  if (quantityValue.length === 0) return false;
  // validate that at least one radio button for location is selected
  const locationBtns = document.getElementsByName("location");
  let locationSelected = false;
  locationBtns.forEach((btn) => locationSelected = locationSelected || btn.checked);
  if (!locationSelected) return false;
  // validate that the general conditions are read and accepted
  const generalConditions = document.getElementById("checkbox1");
  if (!generalConditions.checked) return false;
  return true;
}
