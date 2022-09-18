const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", updateValue);

function updateValue() {
  outputEl.textContent = inputEl.value;

  if (outputEl.textContent === "") {
    outputEl.textContent = "Anonymous";
  }
}
