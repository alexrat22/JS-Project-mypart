import { getCategories } from "./JS/getcategories.js";

const listOfCategories = document.querySelector(".categories__list");

getCategories().then((response) => {
  response.map((categorie) => {
    listOfCategories.insertAdjacentHTML(
      "beforeend",
      `<li class="categories__item">${categorie.list_name}</li>`
    );
  });
  const allItems = document.querySelectorAll(".categories__item");
  allItems.forEach(() => addEventListener("click", onCategoryClick));
});

function onCategoryClick(evt) {
  const activeCategorie = document.querySelector(".active__category");
  activeCategorie.classList.remove("active__category");
  evt.target.classList.add("active__category");
  // if (evt.target.innerHTML === "All categories") {
  //   // Рендер розмітки Ігоря
  // } else //Рендер Розмітки Маргарити (передаємо в функцію evt.target.innerHTML(це назва категорії))
}
