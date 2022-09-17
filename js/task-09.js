const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  span.textContent = body.style.backgroundColor;

  return (body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
