const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul#ingredients");


for (let i=0;i<ingredients.length;i++){
const element = 
document.createElement("li");
element.textContent = ingredients[i];
element.className ="item";
list.append(element);}

