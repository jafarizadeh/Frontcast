const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (i) {
  if (i.textContent.toLowerCase().includes("js")) {
    i.remove();
  }
});
