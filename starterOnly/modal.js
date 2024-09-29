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

// validate first name & last name field
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
firstName.addEventListener('change', function(e){
  e.preventDefault();
  validateName(firstName);
});

lastName.addEventListener('change', function(e){
  e.preventDefault();
  validateName(lastName);
});

function validateName(field){
  // Définition du RegExp
  let nameRegExp = new RegExp('^[A-Z,a-z]{2,30}$', 'g');
  let isValid = field.value.length >= 2 && nameRegExp.test(field.value);
  showHideError(field, isValid);
  return isValid;
}
// validate email field
const emailField = document.getElementById("email");
emailField.addEventListener('change', function(e){
  e.preventDefault();
  validateEmail(emailField);
});

function validateEmail(field){
  // Définition du RegExp
  let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
  showHideError(field, isValid);
  return isValid;
}

  // validate birthdate field
  const birthdateField = document.getElementById("birthdate");
  birthdateField.addEventListener('change', function(e){
    e.preventDefault();
    validateDate(birthdateField);
  });
  
  function validateDate(field){
    // Définition du RegExp
    let dateRegExp = new RegExp('^(19|20)[0-9]{2}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$' );
    let isValid = dateRegExp.test(field.value);
    showHideError(field, isValid);
    return isValid;
  }

    // validate quantity field
    const quantityField = document.getElementById("quantity");
    quantityField.addEventListener('change', function(e){
      e.preventDefault();
      validateQty(quantityField);
    });
    
    function validateQty(field){
      // Définition du RegExp
      let isValid = quantityField.value.length > 0;
      showHideError(field, isValid);
      return isValid;
    }

    function validateLocations(){
      // validate that at least one radio button for location is selected
      const locationBtns = document.getElementsByName("location");
      // Définition du RegExp
      let locationSelected = false;
      locationBtns.forEach((btn) => locationSelected = locationSelected || btn.checked);
      showHideLocationError(locationBtns, locationSelected);
      return locationSelected;
    }    
    
    function validateConditions(){
      // validate that the general conditions are read and accepted
      const generalConditions = document.getElementById("checkbox1");
      let isValid = generalConditions.checked;
      showHideError(generalConditions, isValid);
      return isValid;
    } 

function validate() {

  if(validateName(firstName) && validateName(lastName) && validateEmail(emailField) &&
  validateDate(birthdateField) && validateQty(quantityField) && validateLocations()
  && validateConditions()){
      // submit the form 
      closeModal();
      showThanks();
  }
    return false; 
}
