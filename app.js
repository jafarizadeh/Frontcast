const products = [
  { title: "Book 1", exist: true },
  { title: "Book 2", exist: false },
  { title: "Book 3", exist: true },
  { title: "Book 4", exist: false },
];

const filters = {
  searchItem: "",
  availableProducts: false,
};

const renderProducts = function (products, filters) {
  let filteredProducts = products.filter(function (i) {
    return i.title.toLowerCase().includes(filters.searchItem.toLowerCase());
  });
  filteredProducts = filteredProducts.filter(function (i) {
    if (filters.availableProducts) {
      return i.exist;
    } else {
      return true;
    }
  });
  document.querySelector("#products").innerHTML = "";
  filteredProducts.forEach(function (i) {
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

document
  .querySelector("#add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    products.push({
      title: e.target.elements.productTitle.value,
      exists: true,
    });
    renderProducts(products, filters);
    e.target.elements.productTitle.value = "";
  });

document
  .querySelector("#available-products")
  .addEventListener("change", function (e) {
    filters.availableProducts = e.target.checked;
    renderProducts(products, filters);
  });
