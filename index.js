let precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let agregar = document.querySelector(".agregar");
let quitar = document.querySelector(".quitar");




agregar.addEventListener("click",()=>{
    console.log("click en agregar");
    let cantidadSpan = document.querySelector(".cantidad");
    let cantidad = cantidadSpan.innerHTML;
    let agregaCantidad = parseInt(cantidad) + 1;
    cantidadSpan.innerHTML = agregaCantidad;

    let precioTotal = document.querySelector(".valor-total");
    precioTotal.innerHTML = agregaCantidad * precio;


})

quitar.addEventListener("click",()=>{
    console.log("click en restar");
    let cantidadSpan = document.querySelector(".cantidad");
    let cantidad = cantidadSpan.innerHTML;
    let quitaCantidad = Math.max(0,parseInt(cantidad) - 1)
    console.log(quitaCantidad);
    cantidadSpan.innerHTML = quitaCantidad;

    let precioTotal = document.querySelector(".valor-total");
    precioTotal.innerHTML = quitaCantidad * precio;


})
