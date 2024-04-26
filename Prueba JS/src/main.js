import "./style.css";
import { validarNIF } from "./validanif";

const __CUANTAS_LETRAS = 23;

const dividendo = 40 ;

const resto = dividendo % __CUANTAS_LETRAS;

console.log(
    `El resto de dedividir ${dividendo} entre ${__CUANTAS_LETRAS} es: `,
     resto
    );



const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

const letraCalculada = "T";
console.log(letraCalculada === __LETRAS[resto]);


validarNIF("1234567", "Z");   
