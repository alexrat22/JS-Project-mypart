const listOfCategories = document.querySelector(".categories-list");

fetch("https://books-backend.p.goit.global/books/category-list")
  .then((response) => {
    return response.json();
  })
  .then((categories) =>
    categories.map((categorie) => {
      listOfCategories.insertAdjacentHTML(
        "beforeend",
        `<li class="categories-item">${categorie.list_name}</li>`
      );
    })
  )
  .catch((error) => {
    console.log(error);
  });
