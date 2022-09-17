const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", updateValue);

function updateValue(i) {
  outputEl.textContent = i.currentTarget.value;
}
