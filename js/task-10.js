function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("div#controls>input");
const createButton =document.querySelector("button[data-create]");
const destroyButton =document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("div#boxes");

const createBoxes = (amount) => {
  let divSize=20;
  for (let i=0;i<amount;i++) {
    const box = document.createElement("div")
    divSize = divSize + 10;
    box.style.width = divSize+"px";
    box.style.height = divSize+"px";
    box.style.backgroundColor=getRandomHexColor();
    console.log(box);
    divBoxes.append(box);
    //divBoxes.insertAdjacentHTML("beforeend",`<div width="${divSize}px" height="${divSize}px"></div>`);
  }
  
}

const destroyBoxes = () => {
  divBoxes.innerHTML="";
}

//createBoxes(3);
createButton.addEventListener("click", createBoxes(input.value));
//destroyButton.addEventListener("click",destroyBoxes());


