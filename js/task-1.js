const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((value) => {
  const headingValue = value.querySelectorAll("h2");
  const sublistQuantity = value.querySelectorAll("li");

  console.log(`Category: ${headingValue.textContent}`);
  console.log(`Elements: ${sublistQuantity.length}`);
});
