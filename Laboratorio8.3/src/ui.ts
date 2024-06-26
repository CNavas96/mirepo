 import {  tablero, Tablero  } from "./modelo";
import {  
    barajarCartas, 
    sonPareja, 
    parejaEncontrada,
    parejaNoEncontrada,
    esPartidaCompleta,
    
    sePuedeVoltearLaCarta, 
    
    voltearLaCarta,
} from "./motor";


//empezar Partida y su boton
export const empezarPartida = (): void =>{
    tablero.cartas = barajarCartas(tablero.cartas);

    tablero.estadoPartida = "CeroCartasLevantadas";

    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;

    crear12Divs(tablero); 
    console.log(tablero.cartas);
};


const botonEmpezarPartida = document.getElementById("boton");

if(botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement){
    botonEmpezarPartida?.addEventListener("click", () => empezarPartida());
};

//crear divs y mostrarImagenes
const crearDivCarta = (tablero: Tablero, indice: number): HTMLDivElement => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("contenedor");
    nuevoDiv.setAttribute("data-indice-id", `${indice}`);
    nuevoDiv.classList.add("carta");

  
    const imagenDorso = document.createElement("img");
    imagenDorso.src = "./src/imagen/interroganteImagen.png";
    imagenDorso.id = `carta-${indice}`;
    imagenDorso.classList.add("carta-flip");
    imagenDorso.setAttribute("data-indice-id", `${indice}`);
    imagenDorso.addEventListener("click", () => manejarClickCarta(tablero, indice));
  
    nuevoDiv.appendChild(imagenDorso);
    return nuevoDiv;
  };

const crear12Divs = (tablero: Tablero): void => {
    const contenedor = document.getElementById("contenedor");

    if (contenedor && contenedor instanceof HTMLDivElement) {
        for (let i = 0; i < 12; i++) {
            const nuevoDiv = crearDivCarta(tablero, i);
            contenedor.appendChild(nuevoDiv);
            nuevoDiv.addEventListener("click", () => voltearLaCarta)
        }
    } else {
        console.log("Error: no se pudo encontrar el contenedor.");
    }
  
};


const manejarClickCarta = (tablero: Tablero, indice: number): void => {
    comprobarCartaEstaVueltaAvisaAlJugador(indice);

    // voltea la carta
    if (!sePuedeVoltearLaCarta(tablero, indice)) {
        console.log("No se puede voltear la carta");
        return;
    }

   //asigna el índice al correspondiente indicador
    if (tablero.indiceCartaVolteadaA === undefined) {
        tablero.indiceCartaVolteadaA = indice;
        tablero.estadoPartida = "UnaCartaLevantada";

    } else if (tablero.indiceCartaVolteadaB === undefined) {
        tablero.indiceCartaVolteadaB = indice;
        tablero.estadoPartida = "DosCartasLevantadas";
        

        //voltear la segunda carta y  verificar si son pareja.
        const sonP = sonPareja(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero);
        if (sonP) {
            parejaEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);
            tablero.indiceCartaVolteadaA = undefined;
            tablero.indiceCartaVolteadaB = undefined;


            //la partida ha terminado???
            preguntaFinalizarPartida(tablero); 

        } else {
            if (tablero.indiceCartaVolteadaA !== undefined && tablero.indiceCartaVolteadaB !== undefined) {
                const indiceA = tablero.indiceCartaVolteadaA;
                const indiceB = tablero.indiceCartaVolteadaB;
            

                //si no son pareja se revierte el tablero y te muesta los intentos
                if (!sonPareja(indiceA, indiceB, tablero)) {
                    revertirConTimeOut(tablero, indiceA, indiceB);
                    mostrarIntentos(tablero);
                }
            }
        }
    }
};

const revertirConTimeOut = (tablero: Tablero, indiceA: number, indiceB: number):void => {
    // Si no son pareja, revertir el volteo después de un breve retraso para que se vea el resultado.
    setTimeout(() => {
        parejaNoEncontrada(tablero, indiceA, indiceB);


        // Actualizamos el estado de la partida y reiniciamos los índices.
        tablero.estadoPartida = "CeroCartasLevantadas";
        tablero.indiceCartaVolteadaA = undefined;
        tablero.indiceCartaVolteadaB = undefined;

        // Volvemos a poner boca abajo las cartas.
        voltearLaCarta(tablero, indiceA, tablero.cartas[indiceA].estaVuelta);
        voltearLaCarta(tablero, indiceB, tablero.cartas[indiceB].estaVuelta);
    
    }, 1000);
}


const mostrarIntentos = (tablero: Tablero): void =>  {
    const intentosSpan = document.getElementById("intentos"); 

        if(intentosSpan && intentosSpan instanceof HTMLSpanElement){
            intentosSpan.textContent =`Intentos ${tablero.intentos += 1}`; 
        }

};


const preguntaFinalizarPartida = (tablero: Tablero): void => {
    //la partida ha terminado???
    if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
        alert("¡ENHORABUENA, LO HAS LOGRADO! Has completado la partida en " + tablero.intentos + " intentos.");
    } else {
        tablero.estadoPartida = "CeroCartasLevantadas";
    }
};



const comprobarCartaEstaVueltaAvisaAlJugador = (indice: number): void => {
    const carta = tablero.cartas[indice];
     
    if (carta.estaVuelta) {
        alert("Esta carta ya está volteada.");
        return; 
    } 
};
