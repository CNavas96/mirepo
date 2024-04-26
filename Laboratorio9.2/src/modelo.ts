

export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

export const calcularTipoIva = (tipoIVa: TipoIva): number => {
    let iva: number;

    switch (tipoIVa) {
      case "general": iva = 21;
        break;
      case "reducido": iva = 10;
        break;
      case "superreducidoA": iva = 5;
        break;
      case "superreducidoB": iva = 4;
        break;
      case "superreducidoC": iva = 0;
        break;
      case "sinIva": iva = 0;
        break;
      default:
        throw new Error("Tipo de IVA desconocido");
    }

    return iva;
};

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}


export interface LineaTicket {
    producto: Producto;
    cantidad: number;
}


export const productos: LineaTicket[] = [
    {
      producto: {
            nombre: "Legumbres",
            precio: 2,
            tipoIva: "general",
        },
      cantidad: 2,
    },
    {
      producto: {
            nombre: "Perfume",
            precio: 20,
            tipoIva: "general",
        },
      cantidad: 3,
    },
    {
      producto: {
            nombre: "Leche",
            precio: 1,
            tipoIva: "superreducidoC",
        },
      cantidad: 6,
    },
    {
      producto: {
            nombre: "Lasaña",
            precio: 5,
            tipoIva: "superreducidoA",
        },
      cantidad: 1,
    },
  ];