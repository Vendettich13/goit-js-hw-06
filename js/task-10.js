const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxDiv = document.querySelector("#boxes");
const input = document.querySelector("input");

let valueBox = 30;
let boxArr = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = valueBox + "px";
    box.style.height = valueBox + "px";
    boxDiv.append(box);

    valueBox += 10;
  }
}

function destroyBoxes() {
  boxDiv.innerHTML = "";
  valueBox = 30;
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
