import { getCategories } from "./JS/getcategories.js";

const listOfCategories = document.querySelector(".categories-list");

getCategories().then((response) => {
  response.map((categorie) => {
    listOfCategories.insertAdjacentHTML(
      "beforeend",
      `<li class="categories-item">${categorie.list_name}</li>`
    );
  });
});
