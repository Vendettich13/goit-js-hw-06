const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkValue);

const valueFor = Number(inputEl.dataset.length);

function checkValue(i) {
  inputEl.textContent = i.currentTarget.value;

  if (valueFor === Number(inputEl.textContent.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (
    valueFor < Number(inputEl.textContent.length) ||
    valueFor > Number(inputEl.textContent.length)
  ) {
    inputEl.classList.add("invalid");
  }
}
