import {puntuacion, partida} from "./modelo";
import {
    puntuacionCartaObtenida,
    actualizacionScore,
    dameCarta,
    cogerImagenCarta,
    handlePlantarse,
    handleResetPartida,
} from "./motor";

//1. Mostrar MENSAJE, PUNTUACION U CARTA OBTENIDA
export const mostrarMensaje = (texto : string) : void => {
    const pantallaPuntuacion = document.getElementById("mensaje");

        if(pantallaPuntuacion && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = texto;
        }

};

export const mostrarPuntuacion = (numero : number) : void => {
    const pantallaPuntuacion = document.getElementById("puntuacion");

        if(pantallaPuntuacion && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = numero.toString();
        }
};

export const mostarCartaObtenida = (carta: number) : void => {
    const cartaRecibida = document.getElementById("carta-recibida");
        if(cartaRecibida && cartaRecibida instanceof HTMLImageElement){
            const cartaSrc = cogerImagenCarta(carta);
            cartaRecibida.src = cartaSrc;
        }
}

//PEDIR CARTA   
export function handlePedirCarta() : void {
    const cartaRecibida = document.getElementById("carta-recibida");
        if (cartaRecibida && cartaRecibida instanceof HTMLImageElement){
            const cartaObtenida : number = dameCarta();
            mostarCartaObtenida(cartaObtenida);
         
            const puntuacionObtenida: number = puntuacionCartaObtenida(cartaObtenida);
            const nuevoScore = actualizacionScore(puntuacionObtenida);
            mostrarPuntuacion(nuevoScore);
          
            if (partida.score > puntuacion.numeroParaGanar){
                mostrarMensaje("GAME OVER");
                desactivarBoton("boton-dameCarta");
                desactivarBoton("boton-plantarse")
            }
        }
};


// DESACTIVAR y ACTIVAR BOTONES 
export const desactivarBoton = (id: string) : void => {
    const botonDesactivar = document.getElementById(id);

    if (botonDesactivar  && botonDesactivar instanceof HTMLButtonElement) {
        botonDesactivar.disabled = true;
    }
};

export const activarBoton = (id: string) : void => {
    const botonActivar = document.getElementById(id);
   
        if(botonActivar !== null && botonActivar !== undefined && botonActivar instanceof HTMLButtonElement){
                botonActivar.disabled = false;

        }
};

//CARTA ADICIONAL
export const handleMostrarCartaAdicional = () : void =>{    
    if(partida.score < puntuacion.numeroParaGanar){
        partida.cartaAdicional = dameCarta();

        mostrarCartaAdicional("carta-adicional");
        mostrarBoton("boton-mostrar-carta-adicional");
        voltearCarta("carta-adicional");
    }
};

export function mostarImagenCartaAdicional () : void {
    const imagenCartaAdicional = document.getElementById("carta-adicional");
    if(imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement){
        const cartaAdicionalSrc = cogerImagenCarta(partida.cartaAdicional);
        imagenCartaAdicional.src = cartaAdicionalSrc;
    }
};
//MOSTRAR CARTA ADICIONAL
export const mostrarCartaAdicional = (id: string): void => {
    const imagenCartaAdicional = document.getElementById(id);
    if(imagenCartaAdicional && imagenCartaAdicional instanceof HTMLImageElement){
        imagenCartaAdicional.style.display = "inline";
    }
};
//OCULTAR Carta
export const ocultarCarta = (id: string): void => {
    const cartaOcultada = document.getElementById(id);
    if(cartaOcultada && cartaOcultada instanceof HTMLImageElement){
        cartaOcultada.style.display = "none";
    }
};

//CARTA ADICIONAL BOCA ABAJO 
export const voltearCarta = (id: string): void => {
    const volteo = document.getElementById(id);
    if(volteo && volteo instanceof HTMLImageElement){
        volteo.src = cogerImagenCarta(13);
    }
};


export const ocultarBoton = (id: string) : void => {
    const botonOcultado = document.getElementById(id);
    if( botonOcultado && botonOcultado instanceof HTMLButtonElement){
        botonOcultado.style.display= "none";
    }
};
export const mostrarBoton = (id: string): void => {
    const botonMostrado = document.getElementById(id);
    if(botonMostrado && botonMostrado instanceof HTMLButtonElement){
        botonMostrado.style.display = "inline";
    }
};

//BOTONES
export const initBoton = (): void =>{
    const botonNuevaPartida = document.getElementById("nueva-partida");
    const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
    const botonPlantarse = document.getElementById("boton-plantarse");
    const botonDameCarta = document.getElementById("boton-dameCarta");

    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
            botonNuevaPartida.addEventListener("click", handleResetPartida);   
        }

    if(botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement){
        botonCartaAdicional.addEventListener("click", mostarImagenCartaAdicional);
        botonCartaAdicional.style.display = "none";
    }

    if(botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.addEventListener("click", handlePlantarse);
    }

    if(botonDameCarta && botonDameCarta instanceof HTMLButtonElement){
        botonDameCarta.addEventListener("click", handlePedirCarta);
    } 
};
