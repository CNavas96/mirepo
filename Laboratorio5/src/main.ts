//1. Mostrar puntuación

let score: number = 0;
let cartaAdicional: number = 0;

const mostrarPuntuacion = () : void => {
    const pantallaPuntuacion = document.getElementById("puntuacion");

        if(pantallaPuntuacion !== null && pantallaPuntuacion !== undefined && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = score.toString();

            if(score > 7.5){
                pantallaPuntuacion.textContent = "GAME OVER";
                desactivarBotones();
            } 
        }

};
mostrarPuntuacion();


//2. Pedir carta   

const dameCarta = () : number => {
    let cartaAleatoria : number = Math.ceil(Math.random() * 10);
    if(cartaAleatoria > 7){
        cartaAleatoria  += 2;
    } 
    return cartaAleatoria;
};

// 3. Mostrar carta

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

//Manejadores

function handlePedirCarta() : void {
    const cartaRecibida = document.getElementById("carta-recibida");
        if (cartaRecibida !== null && cartaRecibida !== undefined && cartaRecibida instanceof HTMLImageElement){
            
            let cartaObtenida : number = dameCarta();
            const cartaSrc = cogerImagenCarta(cartaObtenida);
            cartaRecibida.src = cartaSrc;

            if(cartaObtenida > 9 && cartaObtenida < 13){
                cartaObtenida = 0.5;
            }

            score += cartaObtenida;
            mostrarPuntuacion();
        }
}

function handlePlantarse () : void {
    desactivarBotones();
    const pantallaPuntuacion = document.getElementById("puntuacion");

        if(pantallaPuntuacion !== null && pantallaPuntuacion !== undefined && pantallaPuntuacion instanceof HTMLHeadingElement) {
            pantallaPuntuacion.textContent = score.toString();

            if(score <= 4 || score < 5){
                pantallaPuntuacion.textContent = "Has sido muy conservador";
            } else if(score === 5 || score < 6){
                pantallaPuntuacion.textContent ="No huele un poco raro aqui?";
            } else if(score >= 6 && score <= 7){
                pantallaPuntuacion.textContent ="Por porquito...";
            } else if(score === 7.5){
                pantallaPuntuacion.textContent ="LETS FUCKING GO!!! LO HAS LOGRADO"
            }
        } 
        
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

function handleNuevaPartida () : void {
    score = 0;
    mostrarPuntuacion();

    const botonPideCarta = document.getElementById("boton-dameCarta");
    const botonPlantarse = document.getElementById("boton-plantarse");
        if(botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement &&
            botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement){
                botonPideCarta.disabled = false;
                botonPlantarse.disabled = false;
        }

    const imagenCartaAdicional = document.getElementById("carta-adicional");
    const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
    if (imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement &&
        botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement) {
        imagenCartaAdicional.style.display = "none";
        botonCartaAdicional.style.display = "none";
        imagenCartaAdicional.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}

function handleCartaAdicional () : void {
    const imagenCartaAdicional = document.getElementById("carta-adicional");
    if(imagenCartaAdicional !== null && imagenCartaAdicional !== undefined && imagenCartaAdicional instanceof HTMLImageElement){
        const cartaAdicionalSrc = cogerImagenCarta(cartaAdicional);
        imagenCartaAdicional.src = cartaAdicionalSrc;
    }
}

// BOTON PEDIR CARTA
const botonDameCarta = document.getElementById("boton-dameCarta");
    if(botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement){
        botonDameCarta.addEventListener("click", handlePedirCarta);
    } 

//BOTON PLANTARSE
const botonPlantarse = document.getElementById("boton-plantarse");
    if(botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.addEventListener("click", handlePlantarse);   
    }

//BOTON NUEVA PARTIDA
const botonNuevaPartida = document.getElementById("nueva-partida");
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click", handleNuevaPartida);   
    }

//BOTON CARTA ADICIONAL
const botonCartaAdicional = document.getElementById("boton-mostrar-carta-adicional");
    if(botonCartaAdicional !== null && botonCartaAdicional !== undefined && botonCartaAdicional instanceof HTMLButtonElement){
        botonCartaAdicional.addEventListener("click", handleCartaAdicional);
        botonCartaAdicional.style.display = "none";
    }

// DESACTIVAR BOTONES
const desactivarBotones = () : void => {
    const botonDameCarta = document.getElementById("boton-dameCarta");
    const botonPlantarse = document.getElementById("boton-plantarse");

    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement &&
        botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {

        if(score <= 4){
            botonDameCarta.disabled = true;
            botonPlantarse.disabled = true;
        } else if(score === 5){
            botonDameCarta.disabled = true;
            botonPlantarse.disabled = true;
        } else if(score >= 6 && score <= 7){
            botonDameCarta.disabled = true;
            botonPlantarse.disabled = true;
        } else if(score === 7.5){
            botonDameCarta.disabled = true;
            botonPlantarse.disabled = true;
        } else if(score > 7.5){
            botonDameCarta.disabled = true;
            botonPlantarse.disabled = true; 
        } 
        
    }
    
}

