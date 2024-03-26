interface Puntuacion {
    numero: number;
}

const puntuacionParaGanar: Puntuacion = {
    numero:  7.5,
}

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
        case 13:  imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
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
        if (cartaRecibida && cartaRecibida instanceof HTMLImageElement){
            const cartaObtenida : number = dameCarta();
            mostarCartaObtenida(cartaObtenida);

            const puntuacionObtenida: number = puntuacionCartaObtenida(cartaObtenida);
            const nuevoScore = actualizacionScore(puntuacionObtenida);
            mostrarPuntuacion(nuevoScore);

            if (score > puntuacionParaGanar.numero){
                mostrarMensaje("GAME OVER");
                desactivarBoton("boton-dameCarta");
                desactivarBoton("boton-plantarse")
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
    if(botonDameCarta && botonDameCarta instanceof HTMLButtonElement){
        botonDameCarta.addEventListener("click", handlePedirCarta);
    } 



//PLANTARSE
function handlePlantarse () : void {
    desactivarBoton("boton-dameCarta");
    desactivarBoton("boton-plantarse");
    mensajeResultado();
    handleMostrarCartaAdicional();
};

const mensajeResultado = () : void =>{
            if(score <= 4 || score < 5){
                mostrarMensaje("Has sido muy conservador");
            } else if(score === 5 || score < 6){
                mostrarMensaje("No huele un poco raro aqui?");
            } else if(score >= 6 && score <= 7){
                mostrarMensaje("Por porquito...");
            } else if(score === puntuacionParaGanar.numero){
                mostrarMensaje("LETS FUCKING GO!!! LO HAS LOGRADO");
            }
        
};

//BOTON PLANTARSE
const botonPlantarse = document.getElementById("boton-plantarse");
    if(botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.addEventListener("click", handlePlantarse);
    }

// DESACTIVAR y ACTIVAR BOTONES 
const desactivarBoton = (id: string) : void => {
    const botonDesactivar = document.getElementById(id);

    if (botonDesactivar  && botonDesactivar instanceof HTMLButtonElement) {
        botonDesactivar.disabled = true;
    }
};

const activarBoton = (id: string) : void => {
    const botonActivar = document.getElementById(id);
   
        if(botonActivar !== null && botonActivar !== undefined && botonActivar instanceof HTMLButtonElement){
                botonActivar.disabled = false;

        }
};




//CARTA ADICIONAL
function mostarImagenCartaAdicional () : void {
    const imagenCartaAdicional = document.getElementById("carta-adicional");
    if(imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement){
        const cartaAdicionalSrc = cogerImagenCarta(cartaAdicional);
        imagenCartaAdicional.src = cartaAdicionalSrc;
    }
};
//BOTON CARTA ADICIONAL
const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
    if(botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement){
        botonCartaAdicional.addEventListener("click", mostarImagenCartaAdicional);
        botonCartaAdicional.style.display = "none";
    }

 
//OCULTAR Y MOSTRAR CARTA ADICIONAL   
const handleMostrarCartaAdicional = () : void =>{    
    if(score < puntuacionParaGanar.numero){
        cartaAdicional = dameCarta();

        mostrarCartaAdicional("carta-adicional");
        mostrarBoton("boton-mostrar-carta-adicional");
    }
};

//MOSTRAR
const mostrarCartaAdicional = (id: string): void => {
    const imagenCartaAdicional = document.getElementById(id);
    if(imagenCartaAdicional && imagenCartaAdicional instanceof HTMLImageElement){
        imagenCartaAdicional.style.display = "inline";
    }
};
const mostrarBoton = (id: string): void => {
    const botonMostrado = document.getElementById(id);
    if(botonMostrado && botonMostrado instanceof HTMLButtonElement){
        botonMostrado.style.display = "inline";
    }
};

//OCULTAR 
const ocultarBoton = (id: string) : void => {
    const botonOcultado = document.getElementById(id);
    if( botonOcultado && botonOcultado instanceof HTMLButtonElement){
        botonOcultado.style.display= "none";
    }
};
const ocultarCarta = (id: string): void => {
    const cartaOcultada = document.getElementById(id);
    if(cartaOcultada && cartaOcultada instanceof HTMLImageElement){
        cartaOcultada.style.display = "none";
    }
};
//CARTA ADICIONAL BOCA ABAJO 
const voltearCarta = (id: string): void => {
    const volteo = document.getElementById(id);
    if(volteo && volteo instanceof HTMLImageElement){
        volteo.src = cogerImagenCarta(13);
    }
}


//FUNCION QUE NOS INICIE EL JUEGO 
function handleNuevaPartida () : void {
    score = 0;
    mostrarPuntuacion(score);
    activarBoton("boton-dameCarta");
    activarBoton("boton-plantarse");
    ocultarCarta("carta-adicional");
    ocultarBoton("boton-mostrar-carta-adicional")
    mostrarMensaje("Suerte!");
    mostarCartaObtenida(13);
    voltearCarta("carta-adicional");
};
handleNuevaPartida();

//BOTON NUEVA PARTIDA
const botonNuevaPartida = document.getElementById("nueva-partida");
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click", handleNuevaPartida);   
    }


