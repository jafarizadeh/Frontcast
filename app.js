const products = [
  { title: "Node.js Design Patterns" },
  { title: "You Don't Know Js: this & Object Prototype" },
  { title: "Functional React" },
  { title: "You Don't Know JS: Async & Performance" },
];

const filters = {
  searchItem: "",
};

const renderProducts = function (products, filters) {
  const filteredProduct = products.filter(function (i) {
    return i.title
      .toLocaleLowerCase()
      .includes(filters.searchItem.toLocaleLowerCase());
  });
  document.querySelector("#products").innerHTML = "";
  filteredProduct.forEach(function (i) {
    const productEl = document.createElement("p");
    productEl.textContent = i.title;
    document.querySelector("#products").appendChild(productEl);
  });
};

renderProducts(products, filters);

document
  .querySelector("#search-product")
  .addEventListener("input", function (e) {
    filters.searchItem = e.target.value;
    renderProducts(products, filters);
  });
