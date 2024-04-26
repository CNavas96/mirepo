import { LineaTicket, TipoIva,  calcularTipoIva  } from "./modelo";



interface ResultadoLineaTicket {
    nombre: string;
    cantidad: number;
    precioSinIva: number;
    tipoIva: TipoIva;
    precioConIva: number;
}

// devuelve un Array con: por cada producto el nombre, la cantidad,
// el precio sin IVA, el tipo de IVA y el precio con IVA.
export const calcularTicket = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
    const ticketResultado: ResultadoLineaTicket[]  = [] ;

    for (let i = 0; i < lineasTicket.length; i++){
        const precioSinIva = lineasTicket[i].producto.precio * lineasTicket[i].cantidad;
        const porcentajetIva = calcularTipoIva(lineasTicket[i].producto.tipoIva);
        const precioConIva = precioSinIva + (porcentajetIva / 100) * precioSinIva;

        ticketResultado.push({
            nombre: lineasTicket[i].producto.nombre,
            cantidad: lineasTicket[i].cantidad,
            precioSinIva,
            tipoIva: lineasTicket[i].producto.tipoIva,
            precioConIva,
        });
    }

    return ticketResultado;  
};
   



interface ResultadoTotalTicket {
    totalSinIva: number;
    totalConIva: number;
    totalIva: number;
}
//calcula el total  de EL totalSinIva, totalConIva y  totalIva
export const totalPrecioTicket = (ticketResultado : ResultadoLineaTicket[]): ResultadoTotalTicket =>{
    let totalSinIva = 0;
    let totalIva = 0;
    let totalConIva = 0;

    for (const item of ticketResultado) {
        const precioSinIva = item.precioSinIva;
        const tipoIva = calcularTipoIva(item.tipoIva);
        
        const iva = (precioSinIva * tipoIva) / 100;
        const precioConIva = precioSinIva + iva;

        totalSinIva += precioSinIva;
        totalIva += iva;
        totalConIva += precioConIva;
    }

    return {
        totalSinIva,
        totalIva,
        totalConIva,
    };
};



interface TotalPorTipoIva {
    tipoIva: TipoIva;
    cuantia : number;
}

export const tickerTotalPorTipoIva = (ticketResultado: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
    const totalPorTipoIva: TotalPorTipoIva[] = [];

    for (let i = 0; i < ticketResultado.length; i++) {
        const { tipoIva, precioConIva } = ticketResultado[i]; 

        
        const existe = totalPorTipoIva.findIndex((ticketResultado) => ticketResultado.tipoIva === tipoIva);
        if (existe >= 0) {
           
            totalPorTipoIva[existe].cuantia += precioConIva;
        } else {
            
            totalPorTipoIva.push({
                tipoIva: tipoIva,
                cuantia: precioConIva,
            });
        }
    }

    return totalPorTipoIva;
};



export interface TicketFinal {
    lineas: ResultadoLineaTicket[];
    total: ResultadoTotalTicket;
    desgloseIva: TotalPorTipoIva[];
}

export const construirTicketFinal = (lineasTicket: LineaTicket[]): TicketFinal[] => {
    const ticketCalculado = calcularTicket(lineasTicket);
    const totales = totalPrecioTicket(ticketCalculado);
    const desgloseIva = tickerTotalPorTipoIva(ticketCalculado);
    
    const ticketFinal: TicketFinal[] = [
        {
            lineas: ticketCalculado,
            total: totales,
            desgloseIva,
        },
    ];

    return ticketFinal;
};
