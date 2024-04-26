import { calcularTicket, totalPrecioTicket, tickerTotalPorTipoIva, construirTicketFinal  } from "./motor";
import {  productos } from "./modelo";
import { imprimirinformacion } from "./ui"


const lineaTicket = calcularTicket(productos);
console.log("calcularTicket devuelve el ticket", lineaTicket);


const ivas = tickerTotalPorTipoIva(lineaTicket);
console.log("tickerTotalPorTipoIva devuelve el iva que ha sido usado y su cuantia ", ivas);


const total = totalPrecioTicket(lineaTicket);
console.log("totalPrecioTicket devuelve  el iva y el total con y sin iva ",total);

const ticketFinal = construirTicketFinal(productos);
console.log("este es el ticket final: ", ticketFinal);


document.addEventListener("DOMContentLoaded", () => botonImprimir);

const botonImprimir = document.getElementById("boton-imprimir");

if(botonImprimir && botonImprimir instanceof HTMLButtonElement){
    botonImprimir.addEventListener("click", () => imprimirinformacion(ticketFinal));
}
