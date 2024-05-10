import { Personajes } from "./personaje.model";
import  {obtenerPersonajes}   from "./personajes.api";




const crearParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;
};

const crearImagen = (imagen: string, nombrePersonaje: string): HTMLImageElement => {
    const imagenPersonaje = document.createElement("img");

    imagenPersonaje.src = imagen;
    imagenPersonaje.alt = nombrePersonaje;
    return imagenPersonaje;
};


//concatenar la url `http://localhost:3000/${personaje.imagen}` 

const crearContenedorPersonaje =  (personaje: Personajes): HTMLDivElement => {

    const divPersonajes = document.createElement("div");
    divPersonajes.classList.add("personaje-contenedor");

    if(divPersonajes && divPersonajes instanceof HTMLDivElement){
        
        const imagen = crearImagen(`http://localhost:3000/${personaje.imagen}`, personaje.nombre);
        divPersonajes.appendChild(imagen);

        const nombre = crearParrafo(`Nombre: ${personaje.nombre}`);
        divPersonajes.appendChild(nombre);

        const especialidad = crearParrafo(`Especialidad: ${personaje.especialidad}`);
        divPersonajes.appendChild(especialidad);

        const habilidades = document.createElement('p');
        habilidades.textContent = `Habilidades: ${personaje.habilidades}`;
        divPersonajes.appendChild(habilidades);

        return divPersonajes;

    } else{
        throw new Error("crear contenedor personaje ha fallado");
    }
};

const pintarPersonajes = async () => {
    const personajes = await obtenerPersonajes();
    console.log(personajes);
    const listado = document.querySelector("#listado-personajes");
    
    if(listado && listado instanceof HTMLDivElement){
        personajes.forEach((personaje) => {
            const contenedorPersonaje = crearContenedorPersonaje(personaje);
            console.log(contenedorPersonaje);
            listado.appendChild(contenedorPersonaje);
        })
    } else {
        throw new Error("NO SE HA ENCONTRADO EL LISTADO");
    }
};


const buscarPersonaje = (nombre: string, personajes: Personajes[]): Personajes[] => {
    return personajes.filter(personaje =>
      personaje.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  };


const manejadorBusqueda = async (event: Event): Promise<void> =>{
    event.preventDefault();

    const inputBuscar = document.querySelector("#input-buscar");
    if(inputBuscar && inputBuscar instanceof HTMLInputElement){
        const nombre = inputBuscar.value;
        const personajes = await obtenerPersonajes();
    
        limpiarLista();
        resultadoBusqueda(nombre, personajes);
    } else {
        throw new Error("El nombre no existe");
    }
};


const resultadoBusqueda = (nombre: string, personajes: Personajes[]): void => {
    const busqueda = buscarPersonaje(nombre, personajes);
    if(busqueda.length > 0) {

        busqueda.forEach((personaje) => {
        const personajebuscado = crearContenedorPersonaje(personaje);

        const listado = document.querySelector("#listado-personajes");
            if(listado && listado instanceof HTMLDivElement){
                listado.appendChild(personajebuscado);
            }
        })
    } else {
        alert("No existe ese personaje o has escrito mal el nombre");
    }
};       



const limpiarLista = () => {
    const listado = document.querySelector("#listado-personajes");
    if(listado && listado instanceof HTMLDivElement){
        listado.innerHTML ="";
    }
};


const botonBuscar = document.querySelector("#boton-buscar");

if (botonBuscar && botonBuscar instanceof HTMLButtonElement) {
    botonBuscar.addEventListener("click", manejadorBusqueda); 
  } else {
    throw new Error("boton no funciona");
  }

  


document.addEventListener("DOMContentLoaded", pintarPersonajes);
