import Totalizador from "./totalizador.js"; 

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoInput = document.querySelector("#estado");
const form = document.querySelector("#venta-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value.toUpperCase();

  const totalizador = new Totalizador();

  const neto = totalizador.calcularNeto(cantidad, precio);
  const descuento = totalizador.calcularDescuento(neto);

  const precioConDescuento = neto - descuento;
  const impuesto = totalizador.calcularMontoImpuesto(precioConDescuento, estado);
  
  const total = totalizador.calcularTotalFinal(cantidad, precio, estado);

  div.innerHTML = `
    <p>Precio neto (${cantidad} * $${precio}): <strong>$${neto.toFixed(2)}</strong></p>
    <p>Descuento: <strong>$${descuento.toFixed(2)}</strong></p>
    <p>Impuesto para ${estado}: <strong>$${impuesto.toFixed(2)}</strong></p>
    <hr>
    <h3>Precio total (descuento e impuesto): $${total.toFixed(2)}</h3>
  `;
});