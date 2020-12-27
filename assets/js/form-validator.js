const form = document.querySelector(".contact-form");
let name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("text-error");
emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

let errorMessage = [];

function clearContent(element) {
  element.value = "";
}

function defaultContent(element) {
  element.value = "Please Enter A Message";
}

function checkForm(name, email, message) {
  //  All The Name Stuff
  if (name.value === "") {
    nameError.textContent = "You Must Enter A Name";
    nameError.classList.add("error-show");
    e.preventDefault();
  } else if (name.value.length > null && name.value.length < 4) {
    nameError.textContent = "Name cannot be less than 4 characters...";
    nameError.classList.add("error-show");
    e.preventDefault();
  } else if (name.value.length > 12) {
    nameError.textContent = "Name cannot exceed 12 characters...";
    nameError.classList.add("error-show");
    e.preventDefault();
  } else {
    nameError.classList.remove("error-show");
  }

  //  email check
  if (!emailRegEx.test(email)) {
    emailError.textContent =
      "Sorry, this email is not valid, please try again.";
    emailError.classList.add("errow-show");
    e.preventDefault();
  } else {
    emailError.classList.remove("error-show");
    return;
  }
  if (message.value === "" || message.value === "Please Enter A Message") {
    messageError.textContent =
      "Please enter a nice message.  I would love to meet you.";
    messageError.classList.add("error-show");
    e.preventDefault();
  } else {
    messageError.classList.remove("error-show");
    return;
  }
}

//  event listeners

form.addEventListener(
  "submit",
  (e) => {
    checkForm(name, email, message);
  },
  false
);

form.addEventListener("reset", (e) => {
  e.preventDefault();
  name.value = null;
  email.value = null;
  message.value = null;
  let small = document.querySelectorAll("small");
  small.forEach((tag) => {
    tag.classList.remove("error-show");
  });
});
