//1. Mostrar puntuación

let score: number = 0;
let cartaAdicional: number = 0;

const mostrarMensaje = (texto : string) : void => {
    const pantallaPuntuacion = document.getElementById("mensaje");

        if(pantallaPuntuacion && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = texto;
        }

};
const mostrarPuntuacion = (numero : number) : void => {
    const pantallaPuntuacion = document.getElementById("puntuacion");

        if(pantallaPuntuacion && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = numero.toString();
        }
};
mostrarMensaje("Suerte");
mostrarPuntuacion(score);

// Coger IMAGEN
const cogerImagenCarta = (carta: number) : string => {
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
    }
    return imagenCarta;
};

//PEDIR CARTA  
let numeroAletorio = () => Math.ceil(Math.random() * 10);

const dameCarta = () : number => {
    let cartaAleatoria = numeroAletorio();

    if(cartaAleatoria > 7){
        cartaAleatoria  += 2;
    } 
    return cartaAleatoria;
};


function handlePedirCarta() : void {
    const cartaRecibida = document.getElementById("carta-recibida");
        if (cartaRecibida !== null && cartaRecibida !== undefined && cartaRecibida instanceof HTMLImageElement){
            const cartaObtenida : number = dameCarta();
            mostarCartaObtenida(cartaObtenida);

            const puntuacionObtenida: number = puntuacionCartaObtenida(cartaObtenida);
            const nuevoScore = actualizacionScore(puntuacionObtenida);
            mostrarPuntuacion(nuevoScore);

            if (score > 7.5){
                mostrarMensaje("GAME OVER");
                desactivarBotones();
            };
        }
};

const mostarCartaObtenida = (carta: number) : void => {
    const cartaRecibida = document.getElementById("carta-recibida");
        if(cartaRecibida && cartaRecibida instanceof HTMLImageElement){
            const cartaSrc = cogerImagenCarta(carta);
            cartaRecibida.src = cartaSrc;
        }
}

const puntuacionCartaObtenida = (puntuacionCarta: number) : number  => {
    let cartaObtenidaPuntuacion = puntuacionCarta;
    if(cartaObtenidaPuntuacion > 9 && cartaObtenidaPuntuacion < 13){
        cartaObtenidaPuntuacion = 0.5;
    }
return cartaObtenidaPuntuacion;
};

const actualizacionScore = (nuevaActualizacionScore: number) : number =>{
    let scoreActualizado = nuevaActualizacionScore;
    score += scoreActualizado;
    return score;
};
// BOTON PEDIR CARTA
const botonDameCarta = document.getElementById("boton-dameCarta");
    if(botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement){
        botonDameCarta.addEventListener("click", handlePedirCarta);
    } 



//PLANTARSE
function handlePlantarse () : void {
    desactivarBotones();
    mensajeResultado();
    mostrarCartaAdicional();
};

const mensajeResultado = () : void =>{
    const pantallaPuntuacion = document.getElementById("mensaje");

        if(pantallaPuntuacion !== null && pantallaPuntuacion !== undefined && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = score.toString();

            if(score <= 4 || score < 5){
                mostrarMensaje("Has sido muy conservador");
            } else if(score === 5 || score < 6){
                mostrarMensaje("No huele un poco raro aqui?");
            } else if(score >= 6 && score <= 7){
                mostrarMensaje("Por porquito...");
            } else if(score === 7.5){
                mostrarMensaje("LETS FUCKING GO!!! LO HAS LOGRADO");
            }
        } 
};
//BOTON PLANTARSE
const botonPlantarse = document.getElementById("boton-plantarse");
    if(botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.addEventListener("click", handlePlantarse);
    }




//CARTA ADICIONAL
function mostarImagenCartaAdicional () : void {
    const imagenCartaAdicional = document.getElementById("carta-adicional");
    if(imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement){
        const cartaAdicionalSrc = cogerImagenCarta(cartaAdicional);
        imagenCartaAdicional.src = cartaAdicionalSrc;
    }
};

//OCULTAR y Mostrar CARTA ADICIONAL
const ocultarCartaAdicional = () : void =>{
    const imagenCartaAdicional = document.getElementById("carta-adicional");
    const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
    if (imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement &&
        botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement) {
        imagenCartaAdicional.style.display = "none";
        botonCartaAdicional.style.display = "none";
        imagenCartaAdicional.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}
const mostrarCartaAdicional = () : void =>{
    if(score < 7.5){
        cartaAdicional = dameCarta();

        const imagenCartaAdicional = document.getElementById("carta-adicional");
        const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
            if (imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement &&
            botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement) {
            imagenCartaAdicional.style.display = "inline";
            botonCartaAdicional.style.display = "inline";
            imagenCartaAdicional.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"; 
            }
    }
}

//BOTON CARTA ADICIONAL
const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
    if(botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement){
        botonCartaAdicional.addEventListener("click", mostarImagenCartaAdicional);
        botonCartaAdicional.style.display = "none";
    }





// DESACTIVAR y ACTIVAR BOTONES
const desactivarBotones = () : void => {
    const botonDameCarta = document.getElementById("boton-dameCarta");
    const botonPlantarse = document.getElementById("boton-plantarse");

    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement &&
        botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
            botonPlantarse.disabled = true;
        }
};

const activarBotones = () : void => {
    const botonPideCarta = document.getElementById("boton-dameCarta");
    const botonPlantarse = document.getElementById("boton-plantarse");
        if(botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement &&
            botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement){
                botonPideCarta.disabled = false;
                botonPlantarse.disabled = false;
        }
};





//FUNCION QUE NOS INICIE EL JUEGO 
function handleNuevaPartida () : void {
    score = 0;
    mostrarPuntuacion(score);
    activarBotones();
    ocultarCartaAdicional();
    mostrarMensaje("Suerte!");
};

handleNuevaPartida();
//BOTON NUEVA PARTIDA
const botonNuevaPartida = document.getElementById("nueva-partida");
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click", handleNuevaPartida);   
    }
