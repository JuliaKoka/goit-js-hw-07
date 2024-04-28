const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((value) => {
  const headingValue = value.querySelector("h2").textContent;
  const sublistQuantity = value.querySelectorAll("li").length;

  console.log(`Category: ${headingValue}`);
  console.log(`Elements: ${sublistQuantity}`);
});
