const itemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

for (let i = 0; i < itemsEl.length; i += 1) {
  const title = itemsEl[i].firstElementChild.textContent;
  const numberOfEl = itemsEl[i].lastElementChild.children;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${numberOfEl.length}`);
}
