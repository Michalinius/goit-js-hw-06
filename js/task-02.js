const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul#ingredients");

const array=[];

for (let i=0;i<ingredients.length;i++){
const element = 
document.createElement("li");
element.textContent = ingredients[i];
element.className ="item";
array.push(element);
}
console.log(array);
list.append(...array);


