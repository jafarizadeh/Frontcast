// const product = {
//   title: "Book",
//   price: 70,
// };

// const productJSON = JSON.stringify(product);
// console.log(productJSON);

// localStorage.setItem("product", productJSON);

const productJSON = localStorage.getItem("product");
const product = JSON.parse(productJSON);
console.log(product.title);
