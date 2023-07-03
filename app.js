document.querySelector("#add-Product").addEventListener("click", function (e) {
  //   console.log(e);
  e.target.textContent = "Value";
});

document
  .querySelector("#remove-all-product")
  .addEventListener("click", function (e) {
    document.querySelectorAll(".product").forEach(function (i) {
      i.remove();
    });
  });
