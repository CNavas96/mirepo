import { calculaIndiceLetra, obtenLetra } from "./validanif.helper";  

const laEntradaEstaBienFormada= (numero, letras) => {
    if (numero.length !== 8 || letra.length !== 1) {
        throw new Error("El número debe de tener 8 cifras y la letra 1 carácter");
    }
};

/*Valida un NIF
* @param {string} numero, es de tipo string debe tener un tamaño de 8 caracteres
    y ser numérico (sin separadores de miles ni nada)
* @param {string} letra, de tipo string debe ser una letra mayúscula
* @returns {boolean}
*/

export function validarNIF(numero, letra) {
    
    laEntradaEstaBienFormada(numero, letra);

    const resto = calculaIndiceLetra(numero);

    return letra === obtenLetra(resto);
};