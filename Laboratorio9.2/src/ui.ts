
import{ TicketFinal } from "./motor";

export const imprimirinformacion = (ticketFinal: TicketFinal[]): void =>{
    const ticket = document.getElementById("detalles-ticket");

    if (ticket && ticketFinal.length > 0) { // Asegurar que el array no esté vacío
        const final = ticketFinal[0]; // Obtener el primer elemento del array

        // Crear elementos para mostrar detalles del ticket
        final.lineas.forEach((linea) => {
            const producto = document.createElement('p');
            producto.innerText = `${linea.nombre} x ${linea.cantidad}`;
            producto.id = "nombre-producto";

            const precioSinIva = document.createElement('p');
            precioSinIva.innerText = `Precio sin IVA: ${linea.precioSinIva.toFixed(2)} €`;
            precioSinIva.id = "precioSinIva-producto";

            const tipoIva = document.createElement('p');
            tipoIva.innerText = `Tipo de IVA: ${linea.tipoIva}`;
            tipoIva.id= "tipoIVa-producto";

            const precioConIva = document.createElement('p');
            precioConIva.innerText = `Precio con IVA: ${linea.precioConIva.toFixed(2)} €`;
            precioConIva.id = "precioConIva-producto";

            // Agregar detalles al contenedor del ticket
            ticket.appendChild(producto);
            ticket.appendChild(precioSinIva);
            ticket.appendChild(tipoIva);
            ticket.appendChild(precioConIva);
        });
    
        // Mostrar el total del ticket
        const total = document.createElement('p');
        total.innerText = `Total del Ticket: ${final.total.totalConIva.toFixed(2)} €`;
        total.id = "total-producto";

        ticket.appendChild(total);

    }
};

