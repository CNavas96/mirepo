import { partida, puntuacion} from "./modelo";
import {
    desactivarBoton, 
    handleMostrarCartaAdicional, 
    mostrarMensaje,
    activarBoton,
    mostrarPuntuacion,
    ocultarBoton,
    ocultarCarta,
    mostarCartaObtenida,
} from "./ui"


//PEDIR CARTA 
let numeroAletorio = () => Math.ceil(Math.random() * 10);

export const dameCarta = () : number => {
    let cartaAleatoria = numeroAletorio();

    if(cartaAleatoria > puntuacion.sieteCopas){
        cartaAleatoria  += 2;
    } 
    return cartaAleatoria;
};

export const puntuacionCartaObtenida = (puntuacionCarta: number) : number  => {
    let cartaObtenidaPuntuacion = puntuacionCarta;
    if(cartaObtenidaPuntuacion >= puntuacion.diezCopas){
        cartaObtenidaPuntuacion = 0.5;
    }
    return cartaObtenidaPuntuacion;
};

export const actualizacionScore = (nuevaActualizacionScore: number) : number =>{
    let scoreActualizado = nuevaActualizacionScore;
    partida.score += scoreActualizado;
    return partida.score;
};

//PLANTARSE 
export function handlePlantarse () : void {
    desactivarBoton("boton-dameCarta");
    desactivarBoton("boton-plantarse");
    mensajeResultado();
    handleMostrarCartaAdicional();
};

//MENSAJE SEGUN PUNTUACION DESPUES PLANTARSE
const mensajeResultado = () : void =>{
            if(partida.score <= puntuacion.cuatroCopas || partida.score < puntuacion.cincoCopas){
                mostrarMensaje("Has sido muy conservador");
            } else if(partida.score === puntuacion.cincoCopas || partida.score < puntuacion.seisCopas){
                mostrarMensaje("No huele un poco raro aqui?");
            } else if(partida.score >= puntuacion.seisCopas && partida.score <= puntuacion.sieteCopas){
                mostrarMensaje("Por porquito...");
            } else if(partida.score === puntuacion.numeroParaGanar){
                mostrarMensaje("LETS FUCKING GO!!! LO HAS LOGRADO");
            }
        
};


// Coger IMAGEN
export const cogerImagenCarta = (carta: number) : string => {
    let imagenCarta : string = "";

    switch(carta){
        case 1: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            break;
        case 2: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            break;
        case 3: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            break;
        case 4: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            break;
        case 5: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            break;
        case 6: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            break;
        case 7: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            break;
        case 10: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            break;
        case 11: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            break;
        case 12: imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            break;
        case 13:  imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    }
    return imagenCarta;
};


//FUNCION RESET PARTIDA
export function handleResetPartida () : void {
    partida.score = 0;
    mostrarPuntuacion(partida.score);
    activarBoton("boton-dameCarta");
    activarBoton("boton-plantarse");
    ocultarCarta("carta-adicional");
    ocultarBoton("boton-mostrar-carta-adicional")
    mostarCartaObtenida(13);
    mostrarMensaje("Vamos de nuevo");
};
