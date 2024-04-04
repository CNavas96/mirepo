import { partida } from "./modelo";
import { mostrarMensaje, mostrarPuntuacion, initBoton } from "./ui";


//FUNCION QUE NOS INICIE EL JUEGO 
const empiezaPartida = () =>{
    mostrarPuntuacion(partida.score);
    mostrarMensaje("Suerte!");  
    initBoton();
};

document.addEventListener('DOMContentLoaded', empiezaPartida);




