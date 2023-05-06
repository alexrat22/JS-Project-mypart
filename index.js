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
  const test = document.querySelectorAll(".categories__item");
  test.forEach(() => addEventListener("click", () => console.log("click")));
}
