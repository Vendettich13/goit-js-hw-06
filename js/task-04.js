const btn = document.querySelectorAll("button");
const valueEl = document.querySelector("#value");

let counterValue = 0;

btn[0].addEventListener("click", () => {
  valueEl.textContent = counterValue -= 1;
});

btn[1].addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
});
