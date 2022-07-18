let counterValue = 0;

const up = document.querySelector(`button[data-action="increment"]`)
const down = document.querySelector(`button[data-action="decrement"]`)
const counter = document.querySelector("span#value")

up.addEventListener("click",() => {
    counterValue++
    counter.textContent= counterValue;
});
down.addEventListener("click",() => { 
    counterValue--;
    counter.textContent= counterValue;

});

