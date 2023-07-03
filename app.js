// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(function (i) {
//   if (i.textContent.toLowerCase().includes("js")) {
//     i.remove();
//   }
// });

const productItem = [
  { title: "Book1", exist: true },
  { title: "Book2", exist: false },
  { title: "Book3", exist: true },
  { title: "Book4", exist: false },
];
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

const availableProduct = productItem.filter(function (i) {
  return i.exist === true;
});

const message = document.createElement("h4");
message.textContent = `Number of available product is : ${availableProduct.length}`;
document.querySelector("body").appendChild(message);

productItem.forEach(function (i) {
  const test = document.createElement("h5");
  test.textContent = i.title;
  document.querySelector("body").appendChild(test);
});
