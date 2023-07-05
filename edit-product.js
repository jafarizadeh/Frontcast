const titleElement = document.querySelector("#product-title");
const priceElement = document.querySelector("#product-price");
const removeElement = document.querySelector("#remove-product");

const productId = location.hash.substring(1);
const products = getSaveProducts();
const product = products.find(function (i) {
  return i.id === productId;
});

if (product === undefined) {
  location.assign("index.html");
}

titleElement.value = product.title;
priceElement.value = product.price;

titleElement.addEventListener("input", function (e) {
  product.title = e.target.value;
  saveProducts(products);
});

priceElement.addEventListener("input", function (e) {
  product.price = e.target.value;
  saveProducts(products);
});

removeElement.addEventListener("click", function (e) {
  removeProduct(product.id);
  saveProducts(products);
  location.assign("./index.html");
});
