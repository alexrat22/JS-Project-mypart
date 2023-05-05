const test = document.querySelector(".categories-list");

fetch("https://books-backend.p.goit.global/books/category-list")
  .then((response) => {
    return response.json();
  })
  .then((categories) =>
    categories.map((categorie) => {
      test.insertAdjacentHTML(
        "beforeend",
        `<li class="categories-item">${categorie.list_name}</li>`
      );
    })
  );
