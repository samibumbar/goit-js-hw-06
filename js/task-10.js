"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount > 0) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number");
  }
});
destroyButton.addEventListener("click", destroyBoxes);
