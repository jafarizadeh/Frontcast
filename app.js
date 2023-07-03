document
  .querySelector("#add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.productTitle.value);
    e.target.elements.productTitle.value = "";
  });
