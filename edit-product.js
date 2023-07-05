const titleElement = document.querySelector("#product-title");
const priceElement = document.querySelector("#product-price");

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
