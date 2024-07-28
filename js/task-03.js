"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
const markup = images
  .map(({ url, alt }, index) => {
    return `<li style="${
      index === 0 ? "height: calc(100% + 60px);" : ""
    }"><img src="${url}" alt="${alt}" style="max-width: 100%; height: auto;"></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "10px";
gallery.style.listStyle = "none";
gallery.style.padding = "0";

const galleryItems = gallery.querySelectorAll("li");
galleryItems.forEach((item) => {
  item.style.flex = "1 1 calc(33.333% - 10px)";
  item.style.boxSizing = "border-box";
});
// const firstImage = gallery.querySelector("li:first-child img");
// firstImage.style.height = `calc(${firstImage.offsetHeight}px + 60px)`; // am facut asa ca imaginea era mai mica decat celelalte cu 70px
