import { getCategories } from "./JS/getcategories.js";

const listOfCategories = document.querySelector(".categories__list");

getCategories().then((response) => {
  response.map((categorie) => {
    listOfCategories.insertAdjacentHTML(
      "beforeend",
      `<li class="categories__item">${categorie.list_name}</li>`
    );
  });
});

if (getCategories) {
  const allItems = document.querySelectorAll(".categories__item");
  allItems.forEach(() => addEventListener("click", onCategoryClick));
}

function onCategoryClick(evt) {
  const activeCategorie = document.querySelector(".active__category");
  activeCategorie.classList.remove("active__category");
  evt.target.classList.add("active__category");
}
