const control = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");


control.addEventListener("input",(event) => {

    span.style.fontSize=`${event.currentTarget.value}px`;});

//span.style.fontSize ="70px";