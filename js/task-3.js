const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  if (!event.target.value.trim()) {
    output.textContent = "Anonymous";
    return;
  }
  output.textContent = event.target.value.trim();
}
