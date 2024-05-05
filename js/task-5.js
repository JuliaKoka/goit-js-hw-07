function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonClick = document.querySelector(".change-color");
const spanValue = document.querySelector(".color");
const bodyStyle = document.querySelector("body");

buttonClick.addEventListener("click", handleClick);

function handleClick() {
  let randomColor = getRandomHexColor();
  bodyStyle.style.backgroundColor = randomColor;
  spanValue.textContent = randomColor;
}
