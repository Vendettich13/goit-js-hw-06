const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredients[i];
  itemEl.classList.add("item");
  listEl.append(itemEl);
}
