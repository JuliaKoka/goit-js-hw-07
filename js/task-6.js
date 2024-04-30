function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const block = document.querySelector("#boxes");

inputValue.addEventListener("input", handleInput);
create.addEventListener("click", handleClick);
destroy.addEventListener("click", clickHandler);

let amount = 0;

function handleInput(event) {
  amount = event.target.value;
}

function handleClick() {
  destroyBoxes();
  createBoxes();
  inputValue.value = "";
}

function clickHandler() {
  destroyBoxes();
}

function createBoxes() {
  let size = 30;
  if (amount <= 100) {
    for (let i = 0; i < amount; i++) {
      let newBox = document.createElement("div");
      newBox.classList.add("box-style");
      newBox.style.height = size + "px";
      newBox.style.width = size + "px";
      newBox.style.backgroundColor = getRandomHexColor();
      block.appendChild(newBox);

      size += 10;
    }
  }
}

function destroyBoxes() {
  let boxes = document.querySelectorAll(".box-style");
  boxes.forEach((box) => box.remove());
}
