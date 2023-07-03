const getSaveProducts = function () {
  const productsJSON = localStorage.getItem("products");
  if (productsJSON !== null) {
    return JSON.parse(productsJSON);
  } else {
    return [];
  }
};

const saveProducts = function (products) {
  localStorage.setItem("products", JSON.stringify(products));
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
    document.querySelector("#products").appendChild(createProductDOM(i));
  });
};

const createProductDOM = function (product) {
  const productEl = document.createElement("p");
  productEl.textContent = product.title;
  return productEl;
};
