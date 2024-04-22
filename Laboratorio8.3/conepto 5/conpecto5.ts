const mostrarImagen = (indice:number) => {
    const contenedor = document.getElementById(`carta-${indice}`);

    if (contenedor && contenedor instanceof HTMLImageElement) {
        contenedor.src = infoCartas[indice].imagen;
    } else {
        console.log("Error");
    }
};

const crearDivCarta = (indice: number): HTMLDivElement => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("contenedor");
    nuevoDiv.setAttribute("data-indice-id", `${indice}`);

  
    const imagenDorso = document.createElement("img");
    imagenDorso.src = "./src/imagen/interroganteImagen.png";
    imagenDorso.id = `carta-${indice}`;
    imagenDorso.setAttribute("data-indice-id", `${indice}`);
    imagenDorso.addEventListener("click", () => mostrarImagen(indice));
  
    nuevoDiv.appendChild(imagenDorso);
    return nuevoDiv;
  };

const crear12Divs = (): void => {
    const contenedor = document.getElementById("contenedor");

    if (contenedor && contenedor instanceof HTMLDivElement) {
        for (let i = 0; i < 12; i++) {
            const nuevoDiv = crearDivCarta(i);
            contenedor.appendChild(nuevoDiv);
        }
    } else {
        console.log("Error: no se pudo encontrar el contenedor.");
    }
};

document.addEventListener("DOMContentLoaded", crear12Divs);


