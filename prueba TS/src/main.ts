import "./style.css";


const peliculasOriginal = [
    "El señor de los anillo",
    "El padrino",
    "Matrix",
];

const borrarElemento = <T> (coleccionEntrada : T[], indice : number): T[] => [
    ...coleccionEntrada.slice(0, indice),
    ...coleccionEntrada.slice(indice + 1),
];


const pelisNuevas = borrarElemento(peliculasOriginal, 1);
console.log(pelisNuevas);


const number =  [1, 2, 3, 4, 5];

const nuevoNumero = borrarElemento(number, 2);
console.log(nuevoNumero);


const añadirElemento = <T> (arrayEntrada : T[], elemento : T, cabeza: boolean): T[] => 
    (cabeza) ? [elemento, ...arrayEntrada] : [...arrayEntrada, elemento];



interface Cliente  {
    nombre: string;
    apellido: string;
    edad: number;

};

const personas: Cliente[] = [
    { nombre: "Luis", apellido: "Gomez", edad: 24 },
    { nombre: "Pedro", apellido: "Larry", edad: 31 },
    { nombre: "Raul", apellido: "Pardo", edad: 30 },
    { nombre: "pepe", apellido: "siiii", edad: 50 },
   ];
    
const personasNuevas = añadirElemento(
    personas,
    {nombre:"Roberto", apellido: "Sami", edad: 29},
    false,
)

console.log(personasNuevas);


const numeros = [1, 2, 3, 4, 5];

const numerosNuevos = añadirElemento(numeros, 100, true);

console.log(numerosNuevos);


