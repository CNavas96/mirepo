import "./style.css";



interface GrupoMusical {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string;
    
};

const estiloNombre = "color: green; font-size: 18px; font-weight: bold";

/*GENEROS*/ 
const popRock = "PoP Rock";
const hardRock = "Hard Rock";
const rock = "Rock";
const clasica = "Clásica";



const grupoA: GrupoMusical = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    genero: popRock,
};

const grupoB: GrupoMusical = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: rock,
};

const grupoC: GrupoMusical = {
    nombre: "AC DC",
    añoFundacion: 1973 ,
    activo: true,
    genero: hardRock,
};

const grupoD: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: clasica,
};

const grupoE: GrupoMusical = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: rock,
};




console.log(`%c${grupoA.nombre}`, estiloNombre, ` / Año de fundacion: ${grupoA.añoFundacion} / Activo: ${grupoA.activo} / Genero: ${grupoA.genero}`);

console.log("*********");

console.log(`%c${grupoB.nombre}`, estiloNombre, ` / Año de fundacion: ${grupoB.añoFundacion} / Activo: ${grupoB.activo} / Genero: ${grupoB.genero}`);

console.log("*********");

console.log(`%c${grupoC.nombre}`, estiloNombre, ` / Año de fundacion: ${grupoC.añoFundacion} / Activo: ${grupoC.activo} / Genero: ${grupoC.genero}`);

console.log("*********");

console.log(`%c${grupoD.nombre}`, estiloNombre, ` / Año de fundacion: ${grupoD.añoFundacion} / Activo: ${grupoD.activo} / Genero: ${grupoD.genero}`);

console.log("*********");

console.log(`%c${grupoE.nombre}`, estiloNombre, ` / Año de fundacion: ${grupoE.añoFundacion} / Activo: ${grupoE.activo} / Genero: ${grupoE.genero}`);