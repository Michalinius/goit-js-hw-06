function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorName = document.querySelector("div.widget>p>span.color");
const button = document.querySelector("button.change-color");
button.addEventListener("click", () => {document.body.style.backgroundColor=getRandomHexColor();
colorName.textContent=getRandomHexColor();
} );