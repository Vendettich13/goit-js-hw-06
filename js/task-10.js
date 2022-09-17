const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxDiv = document.querySelector("#boxes");
const input = document.querySelector("input");

let valueBox = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = input.value;

  const boxArr = [];

  for (let i = 0; i <= amount; i += 1) {
    const element = boxArr[i];

    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = valueBox + "px";
    box.style.height = valueBox + "px";
    boxDiv.after(box);

    valueBox += 10;
  }
}

function destroyBoxes() {
  const boxEl = document.querySelectorAll(".box");
  for (let i = 0; i <= boxEl.length; i += 1) {
    boxEl[i].remove();
  }
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
