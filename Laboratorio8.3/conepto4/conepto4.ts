const mostrarImagen = () => {
    const contenedor = document.getElementById("contenedor");

    if (contenedor && contenedor instanceof HTMLDivElement) {
        contenedor.addEventListener("click", (carta) => {
            const cartaSeleccionada = carta.target;

            if(cartaSeleccionada && cartaSeleccionada instanceof HTMLImageElement){
                cartaSeleccionada.src = 
                "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
            }
        });
    } else {
        console.log("Error");
    }
};


document.addEventListener("DOMContentLoaded", mostrarImagen); 


const crear12Divs = (): void => {
    const contenedor = document.getElementById("contenedor");

    if (contenedor && contenedor instanceof HTMLDivElement) {
        for (let i = 0; i < 12; i++) {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("contenedor")
            

            const imagenDorso = document.createElement("img");
            imagenDorso.src = "./src/imagen/interroganteImagen.png";
            imagenDorso.id = `carta-${i + 1}`;

            nuevoDiv.appendChild(imagenDorso);
            contenedor.appendChild(nuevoDiv);
        }
    } else {
        console.log("Error: no se pudo encontrar el contenedor.");
    }
};

document.addEventListener("DOMContentLoaded", crear12Divs);
