import "../reseteo.css";

const extraerEnlaces = () => {
    const inputTextArea = document.querySelector("#inputText");
    if(inputTextArea && inputTextArea instanceof HTMLTextAreaElement){
        const valorInput = inputTextArea.value;
        const patron = /img.*?src="(.*?)".*?>/g;

        const coincidencias = valorInput.matchAll(patron);


        const resultado = document.querySelector("#resultado");
        if(resultado && resultado instanceof HTMLDivElement){

            for(const coincidencia of coincidencias){
                const imagenURL = coincidencia[1];
                
                const crearLinkImagen = document.createElement("a");
                crearLinkImagen.href = imagenURL;
                crearLinkImagen.textContent = imagenURL;

                const divEnlace = document.createElement("div");
                divEnlace.appendChild(crearLinkImagen);

                resultado.appendChild(divEnlace);
            }
        }
    }
};

const botonEnviar = document.querySelector("#boton");
if(botonEnviar && botonEnviar instanceof HTMLButtonElement){
    botonEnviar.addEventListener("click", extraerEnlaces)
}