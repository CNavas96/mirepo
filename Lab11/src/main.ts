import "./reseteo.css";

const botonApartadoA = document.querySelector("#apartado-a");
 
if(botonApartadoA && botonApartadoA instanceof HTMLButtonElement){
    botonApartadoA.addEventListener("click", () =>{
        window.location.href = "./src/apartadoA/index.html";
    })
}


const botonApartadoB = document.querySelector("#apartado-b");
 
if(botonApartadoB && botonApartadoB instanceof HTMLButtonElement){
    botonApartadoB.addEventListener("click", () =>{
        window.location.href = './src/apartadoB/index.html';
    })
}