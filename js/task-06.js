const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (event) => {
    console.log(event.currentTarget.value.length);
    console.log(input.getAttribute("data-length"));
    console.log(input.dataset.length);
    //nawet nie pytajcie ile czasu zmarnowałem zanim doszedłem że nie działa bo 6==="6" robi false
    if (event.currentTarget.value.length===parseInt(input.getAttribute("data-length"))) input.className="valid";
    else input.className="invalid";
})


