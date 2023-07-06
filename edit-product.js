const titleElement = document.querySelector("#product-title");
const priceElement = document.querySelector("#product-price");
const removeElement = document.querySelector("#remove-product");
const dateElement = document.querySelector("#last-edit");

const productId = location.hash.substring(1);
let products = getSaveProducts();
let product = products.find(function (i) {
  return i.id === productId;
});

if (product === undefined) {
  location.assign("index.html");
}

titleElement.value = product.title;
priceElement.value = product.price;
dateElement.textContent = lastEditMessage(product.updated);

titleElement.addEventListener("input", function (e) {
  product.title = e.target.value;
  product.updated = moment().valueOf();
  dateElement.textContent = lastEditMessage(product.updated);
  saveProducts(products);
});

priceElement.addEventListener("input", function (e) {
  product.price = e.target.value;
  product.updated = moment().valueOf();
  dateElement.textContent = lastEditMessage(product.updated);
  saveProducts(products);
});

removeElement.addEventListener("click", function (e) {
  removeProduct(product.id);
  saveProducts(products);
  location.assign("./index.html");
});

window.addEventListener("storage", function (e) {
  if (e.key === "products") {
    products = JSON.parse(e.newValue);
    product = products.find(function (i) {
      return i.id === productId;
    });
    if (product === undefined) {
      location.assign("index.html");
    }

    titleElement.value = product.title;
    priceElement.value = product.price;
    dateElement.textContent = lastEditMessage(product.updated);
  }
});
