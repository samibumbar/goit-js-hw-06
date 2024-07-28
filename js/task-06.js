"use strict";

const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.dataset.length, 10);

  const actualLength = input.value.length;

  if (actualLength === expectedLength) {
    input.style.borderColor = "green";
    // input.style.backgroundColor = "#e0ffe0";
    input.style.color = "green";
  } else {
    input.style.borderColor = "red";
    // input.style.backgroundColor = "#ffe0e0";
    input.style.color = "red";
  }
});
