"use strict";
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};
  let allFieldsFilled = true;
  formData.forEach((value, key) => {
    if (!value.trim()) {
      allFieldsFilled = false;
    }
    data[key] = value;
  });
  if (!allFieldsFilled) {
    alert("Toate câmpurile trebuie completate!");
  } else {
    console.log(data);
    form.reset();
  }
});
