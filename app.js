// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(function (i) {
//   if (i.textContent.toLowerCase().includes("js")) {
//     i.remove();
//   }
// });

// const productItem = [
//   { title: "Book1", exist: true },
//   { title: "Book2", exist: false },
//   { title: "Book3", exist: true },
//   { title: "Book4", exist: false },
// ];

// const test = [];
// productItem.forEach(function (i) {
//   const newParagraph = document.createElement("p");
//   newParagraph.textContent = i.title;
//   document.querySelector("body").appendChild(newParagraph);
//   if (i.exist) {
//     test.push(i);
//   }
// });
// console.log(test.length);

// const availableProduct = productItem.filter(function (i) {
//   return i.exist === true;
// });

// const message = document.createElement("h4");
// message.textContent = `Number of available product is : ${availableProduct.length}`;
// document.querySelector("body").appendChild(message);

// productItem.forEach(function (i) {
//   const test = document.createElement("h5");
//   test.textContent = i.title;
//   document.querySelector("body").appendChild(test);
// });

// document
//   .querySelector("#search-products")
//   .addEventListener("input", function (e) {
//     console.log(e.target.value);
//   });

// const products = [
//   {
//     title: "Node.js Design Patterns",
//   },
//   {
//     title: "Functional web Development with React and Redux",
//   },
//   {
//     title: "You Don't Know JS: Async & performance",
//   },
//   {
//     title: "Functional React",
//   },
//   {
//     title: "You Don't Know JS: Scope & Closures",
//   },
// ];

// document
//   .querySelector("#search-products")
//   .addEventListener("input", function (e) {
//     filters.searchItem = e.target.value;
//     renderProducts(products, filters);
//   });

// const filters = {
//   searchItem: "",
// };

// const renderProducts = function (products, filters) {
//   const filteredProducts = products.filter(function (i) {
//     return i.title.toLowerCase().includes(filters.searchItem.toLowerCase());
//   });

//   document.querySelector("#products").innerHTML = "";
//   filteredProducts.forEach(function (i) {
//     const productEl = document.createElement("p");
//     productEl.textContent = i.title;
//     document.querySelector("#products").appendChild(productEl);
//   });
// };

// renderProducts(products, filters);

const products = [];

const filters = {
  searchItem: "",
};

const renderProducts = function (products, filters) {
  const filteredProducts = products.filter(function (i) {
    return i.title.toLowerCase().includes(filters.searchItem.toLowerCase());
  });
  document.querySelector("#products").innerHTML;
  filteredProducts.forEach(function (i) {
    const productEl = document.createElement("p");
    productEl.textContent = i.title;
    document.querySelector("#products").appendChild(productEl);
  });
};

renderProducts(products, filters);

document
  .querySelector("#search-products")
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
