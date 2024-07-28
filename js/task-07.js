"use strict";
const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.value = 16;
fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value;
  textElement.style.fontSize = `${fontSize}px`;
});
