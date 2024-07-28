"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ul.appendChild(li);
  ingredientsList.appendChild(ul);
});
