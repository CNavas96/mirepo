const mostrarImagen = (): void => {
    const contenedorImagen = document.getElementById("carta1");
    if (contenedorImagen && contenedorImagen instanceof HTMLImageElement) {
        contenedorImagen.addEventListener("click", () => {
            contenedorImagen.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
        });
    } else {
        console.log("Error");
    }
};