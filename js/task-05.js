"use strict";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", (event) => {
  output.textContent = event.target.value || "Anonymous";
});
