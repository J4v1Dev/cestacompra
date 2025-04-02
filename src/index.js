let fruta1 = prompt("Escribe una fruta");
let precioFruta1 = prompt("Escribe el precio de la fruta");
let cantidadFruta1 = prompt("Escribe la cantidad comprada");

let seguirComprando = confirm("¿Quieres seguir comprando?");

let fruta2 = "";
let precioFruta2 = 0;
let cantidadFruta2 = 0;
if (seguirComprando) {
  fruta2 = prompt("Escribe otra fruta");
  precioFruta2 = prompt("Escribe el precio de la fruta");
  cantidadFruta2 = prompt("Escribe la cantidad comprada");
}

if (seguirComprando) {
    seguirComprando = confirm("¿Quieres seguir comprando?");
}

let fruta3 = "";
let precioFruta3 = 0;
let cantidadFruta3 = 0;

if (seguirComprando) {
  fruta3 = prompt("Escribe otra fruta");
  precioFruta3 = prompt("Escribe el precio de la fruta");
  cantidadFruta3 = prompt("Escribe la cantidad comprada");
}
if (seguirComprando) {
    seguirComprando = confirm("¿Quieres seguir comprando?");
}

let fruta4 = "";
let precioFruta4 = 0;
let cantidadFruta4 = 0;

if (seguirComprando) {
  fruta4 = prompt("Escribe otra fruta");
  precioFruta4 = prompt("Escribe el precio de la fruta");
  cantidadFruta4 = prompt("Escribe la cantidad comprada");
}

if (seguirComprando) {
    seguirComprando = confirm("¿Quieres seguir comprando?");
}

let fruta5 = "";
let precioFruta5 = 0;
let cantidadFruta5 = 0;

if (seguirComprando) {
  fruta5 = prompt("Escribe otra fruta");
  precioFruta5 = prompt("Escribe el precio de la fruta");
  cantidadFruta5 = prompt("Escribe la cantidad comprada");
}

const precioFinalFruta1 = parseFloat(precioFruta1) * parseInt(cantidadFruta1);
const precioFinalFruta2 = parseFloat(precioFruta2) * parseInt(cantidadFruta2);
const precioFinalFruta3 = parseFloat(precioFruta3) * parseInt(cantidadFruta3);
const precioFinalFruta4 = parseFloat(precioFruta4) * parseInt(cantidadFruta4);
const precioFinalFruta5 = parseFloat(precioFruta5) * parseInt(cantidadFruta5);

const total = precioFinalFruta1 + precioFinalFruta2 + precioFinalFruta3 + precioFinalFruta4 + precioFinalFruta5;

alert(`El total a pagar es: ${total}`);