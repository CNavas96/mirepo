import { Carta,    Tablero, tablero, imagenDorso} from "./modelo";
import {  } from "./ui";
/*
En el motor nos va a hacer falta un método para barajar cartas
*/
export const barajarCartas = (cartas : Carta[]): Carta[] => {
    const cartasBajadas = cartas.slice();
        
        
    for (let i = cartasBajadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartasBajadas[i], cartasBajadas[j]] = [cartasBajadas[j], cartasBajadas[i]];
    }
    return cartasBajadas;
};

  /*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  const carta = tablero.cartas[indice];

    if(carta.estaVuelta && carta.encontrada && tablero.estadoPartida === "CeroCartasLevantadas" || tablero.estadoPartida !== "DosCartasLevantadas"){
      carta.estaVuelta = true;
      carta.encontrada = true;
      voltearLaCarta(tablero, indice, tablero.cartas[indice].estaVuelta);
    } 

  return carta.encontrada && carta.estaVuelta;
};
  


export const voltearLaCarta = (tablero: Tablero, indice: number, estaVolteada: boolean): void => {
  const carta = document.getElementById(`carta-${indice}`);

  if (carta && carta instanceof HTMLImageElement) {
    carta.src = estaVolteada  ? tablero.cartas[indice].imagen : imagenDorso;
  }
};
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    const idCartaA = tablero.cartas[indiceA].idFoto;
    const idCartaB = tablero.cartas[indiceB].idFoto;

  if(idCartaA === idCartaB){
    parejaEncontrada(tablero, idCartaA, idCartaB);
    console.log("pareja encontrada esta ejecutanndose")
    return true 
  } else {
    parejaNoEncontrada(tablero , idCartaA, idCartaB);
    console.log("pareja NO encontrada esta ejecutanndose")
    return false
  }
  
};

document.addEventListener("DOMContentLoaded", () => sonPareja(tablero.cartas[1].idFoto, tablero.cartas[1].idFoto, tablero));
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */

export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): boolean => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = "DosCartasLevantadas";
  
  return true 
};
  
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : boolean => {
  

  if(tablero.cartas[indiceA].estaVuelta === true && tablero.cartas[indiceA].encontrada === true){
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceA].encontrada = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.cartas[indiceB].encontrada = false;
    tablero.estadoPartida = "CeroCartasLevantadas";

    console.log("comprobando si PAREJA NO ENCONTRADA FUNCIONA")
  }

  return false
};
  
  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
    return tablero.cartas.every(carta =>  carta.encontrada)

};
    
  

  
  /*
  Iniciar partida
  */
  
export const iniciaPartida = (tablero: Tablero): void => {
  
  for (let i = 0; i < tablero.cartas.length; i++) {
        
    tablero.cartas[i].estaVuelta = false;
    tablero.cartas[i].encontrada = false;
  }

  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};
