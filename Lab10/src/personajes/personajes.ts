import { Personajes } from "./personaje.model";
import  {obtenerPersonajes}   from "./personajes.api";




const crearParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;
};

const crearImagen = (imagen: string): HTMLImageElement => {
    const imagenPersonaje = document.createElement("img");
    imagenPersonaje.src = imagen;
    return imagenPersonaje;
};

const crearContenedorPersonaje =  (personaje: Personajes): HTMLDivElement => {

    const divPersonajes = document.createElement("div");
    divPersonajes.classList.add("personaje-contenedor");

    if(divPersonajes && divPersonajes instanceof HTMLDivElement){
        const imagen = crearImagen(personaje.imagen);
        divPersonajes.appendChild(imagen);

        const nombre = crearParrafo(personaje.nombre);
        divPersonajes.appendChild(nombre);

        const especialidad = crearParrafo(personaje.especialidad);
        divPersonajes.appendChild(especialidad);

        personaje.habilidades.forEach((habilidad) => {
            const textoHabilidades = crearParrafo(habilidad);
            divPersonajes.appendChild(textoHabilidades);
        });
    
        return divPersonajes;

    } else{
        throw new Error("crear contenedor personaje ha fallado");
    }
};

const pintarPersonajes = async () => {
    const personajes = await obtenerPersonajes();
    const listado = document.querySelector("listado-personajes");
    
    if(listado && listado instanceof HTMLDivElement){
        personajes.forEach((personaje) => {
            const contenedorPersonaje = crearContenedorPersonaje(personaje);
            listado.appendChild(contenedorPersonaje);
        })
    } else {
        throw new Error("NO SE HA ENCONTRADO EL LISTADO");
    }
};

//ERROR EN LA CONSOLA PREGUNTAR

document.addEventListener("DOMContentLoaded", pintarPersonajes);
