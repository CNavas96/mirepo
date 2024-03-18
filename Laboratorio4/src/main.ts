//Boton anterior

function retrocederNumero  () : void {
    const pantalla = document.getElementById("numero-turno");

    if(pantalla !== null && pantalla !== undefined && pantalla instanceof HTMLHeadingElement){
        let resultadoPantalla: number = parseInt(pantalla.textContent || "00", 10);

        resultadoPantalla = resultadoPantalla - 1;

        pantalla.textContent = resultadoPantalla.toString().padStart(2, "0");
    } else {
        console.log("error");
        console.log(pantalla);
    }
}   

const botonRetroceder = document.getElementById("button-anterior");
if(botonRetroceder !== null && botonRetroceder !== undefined && botonRetroceder instanceof HTMLButtonElement) {
    botonRetroceder.addEventListener("click", retrocederNumero);
}


//Boton Siguiente

function avanzarNumero  () : void {
    const pantalla = document.getElementById("numero-turno");

    if(pantalla !== null && pantalla !== undefined && pantalla instanceof HTMLHeadingElement){
        let resultadoPantalla: number = parseInt(pantalla.textContent || "01", 10);

        resultadoPantalla = resultadoPantalla + 1;

        pantalla.textContent = resultadoPantalla.toString().padStart(2, "0");
    }
}   

const botonSiguiente = document.getElementById("button-siguiente");
if(botonSiguiente !== null && botonSiguiente !== undefined && botonSiguiente instanceof HTMLButtonElement) {
    botonSiguiente.addEventListener("click", avanzarNumero);
}


//Boton Reset

function resetNumero  () : void {
    const pantalla = document.getElementById("numero-turno");

    if(pantalla !== null && pantalla !== undefined && pantalla instanceof HTMLHeadingElement){
        let resultadoPantalla: number = parseInt(pantalla.textContent || "01", 10);

        resultadoPantalla = 0;

        pantalla.textContent = resultadoPantalla.toString().padStart(2, "0");
    } else {
        console.log("error");
        console.log(pantalla);
    }
}   

const botonReset = document.getElementById("button-reset");
if(botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", resetNumero);
}


//Buscar el numero que el operario quiera

function buscarNumero(): void {
    const pantalla = document.getElementById("numero-turno");
    const inputNumero = document.getElementById("input-numero");

    if (pantalla !== null && pantalla !== undefined && pantalla instanceof HTMLHeadingElement && 
        inputNumero !== null && inputNumero !== undefined && inputNumero instanceof HTMLInputElement) {

        const numeroIngresado: number = parseInt(inputNumero.value, 10);
        
        pantalla.textContent = numeroIngresado.toString().padStart(2, "0");
        }
}

const botonBuscar = document.getElementById("buscar-numero");
if (botonBuscar !== null && botonBuscar instanceof HTMLButtonElement) {
    botonBuscar.addEventListener("click", buscarNumero);
}


