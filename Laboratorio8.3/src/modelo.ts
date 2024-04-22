// import {  } from "./motor";

import {  } from "./ui";


export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
  }
  
export interface InfoCarta {
    idFoto: number;
    imagen: string;
  }
  
  export const infoCartas: InfoCarta[] = [
        {
            idFoto: 1,  
            imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
        },
        {
            idFoto: 2, 
            imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",  
        },
        {
            idFoto: 3,
            imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
        },
        {
            idFoto: 4,
            imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
        },
        {
            idFoto: 5,
            imagen:"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
        },
        {
            idFoto: 6,
            imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",     
        }
]; 
export const imagenDorso = "./src/imagen/interroganteImagen.png";   

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});



  const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const cartas: Carta[] = [];
  
    infoCartas.forEach((infoCarta ) => {
      const carta = crearCartaInicial(infoCarta.idFoto, infoCarta.imagen);
      cartas.push(carta, { ...carta });
      cartas[1].encontrada = false;// porque si le pongo false y sigue estando true?????
    });
  
    return cartas;
  };

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);
  console.log("Porque devuelve un true?",cartas);


  /*
    Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
    EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
  */
  
  type EstadoPartida =
    | "PartidaNoIniciada"
    | "CeroCartasLevantadas"
    | "UnaCartaLevantada"
    | "DosCartasLevantadas"
    | "PartidaCompleta";
  
  export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
    intentos: number
  }
  
  const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
    intentos: 0,
  });
  
export let tablero: Tablero = crearTableroInicial();


console.log( "soy let tablero", tablero);
