const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.value = 16;

inputEl.addEventListener("input", fn);

function fn() {
  textEl.style.fontSize = inputEl.value + "px";
}
