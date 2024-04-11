/*
const ropa = [
    {
        foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-1.jpg",
        tipoProducto: "Camisa",
        precio: 25,
    },
    {
        foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-2.jpg",
        tipoProducto: "Camiseta",
        precio: 22.99,
    },
    {
        foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-3.jpg",
        tipoProducto: "Vestido",
        precio: 34.99,
    },
    {
        foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-4.jpg",
        tipoProducto: "Vaqueros",
        precio: 79.99,
    },
    {
        foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-5.jpg",
        tipoProducto: "Polo",
        precio: 44.95,
    },
    {
        foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-6.jpg",
        tipoProducto: "Camisa",
        precio: 44.99,
    },
];

const muestraPrenda = (prenda) => {
    const div = document.getElementById("lista-ropa");
    const imagen = document.createElement("img");
    const tipoProducto = document.createElement("p");
    const precio = document.createElement("p");
    const cardDiv = document.createElement("div");

    imagen.src = prenda.foto;
    tipoProducto.textContent = prenda.tipoProducto;
    precio.textContent = prenda.precio;
    cardDiv.setAttribute("class", "card");

    div.appendChild(cardDiv);
    cardDiv.appendChild(imagen);
    cardDiv.appendChild(tipoProducto);
    cardDiv.appendChild(precio);
};

const muestraColeccionPrendas = () => {
    for(let i = 0; i < ropa.length; i++) {
        muestraPrenda(ropa[i]);
    } 
}
document.addEventListener("DOMContentLoaded", muestraColeccionPrendas);
*/

/*
const carrito = [
    {
    tipoProducto: "Camiseta",
    precio: 19.99,
    },
    {
    tipoProducto: "Pantalones",
    precio: 34.99,
    },
    {
    tipoProducto: "Jersey",
    precio: 44.99,
    },
    {
    tipoProducto: "Vaqueros",
    precio: 79.99,
    },
    {
    tipoProducto: "Polo",
    precio: 44.95,
    },
];



for(let i = 0; i < carrito.length; i++){
    const prenda = carrito[i];
    console.log(prenda);
}

//WHILE

let i = 0;
while (i < carrito.length) {
    const prenda = carrito[i];
    console.log(prenda);
    i++;
}
*/

////////////// como cambiar un valor de una variable en un array sin que la variable se vea afectada y solo el cambio esta en el Array
/*
const ana = { nombre: "Ana", edad: 20 };
 
const personas = [
    ana,
    { nombre: "Luis", edad: 24 },
    { nombre: "Pedro", edad: 31 },
   ];

personas[0] = {
    ...personas[0],
    edad: 21,
};
console.log(personas);
console.log(ana);

*//*
////// toSorted() para ordenar el Array orden alfabetico

const peliculaOriginal = [
    "El señor de los anillo",
    "El padrino",
];

const peliculasNuevo = peliculaOriginal.toSorted();


console.log(peliculaOriginal);
console.log(peliculasNuevo);

///////////// ordenar por edad y por lo que te de la gana aqui el ejemplo 

const clientes = [
    {nombre: "Juan", edad: 20,},
    {nombre: "Pedro", edad: 40,},
    {nombre: "Ana", edad: 30,},
]

const ordenadosPorEdad = clientes.toSorted((a, b) => a.edad - b.edad);

console.log(ordenadosPorEdad);

*/
/*
//// poner (SOY UNA ARAY).splice((A)soy la posicion, (B)yo la cantidad ) sirve para borrar elementos del Array
///   Array.slice para trocear el array y llevarte una copia del cacho a otro array o variable.
const peliculasOriginal = [
    "El señor de los anillo",
    "El padrino",
    "Matrix",
];

const peliculasNuevo = [
    ...peliculasOriginal.slice(0, 1),
    ...peliculasOriginal.slice(2),
]

peliculasOriginal.splice(1, 1);

console.log(peliculasOriginal);
console.log(peliculasNuevo);
*/
/*
//////// Vaciar un Array

let peliculasOriginal = [
    "El señor de los anillo",
    "El padrino",
    "Matrix",
];
console.log(peliculasOriginal);


peliculasOriginal = [],
console.log(peliculasOriginal);
*/

//// PARA SABER SI ALGUNA RESERVA A FALLADO
const reservas = [
    {
        id: 23453,
        precio: 250,
        habitacion: "standard",
        prepago: false,
        completadaConExito: true,
    },
    {
        id: 56456,
        precio: 150,
        habitacion: "superior",
        prepago: false,
        completadaConExito: true,
    },
    {
        id: 43243,
        precio: 550,
        habitacion: "standard",
        prepago: true,
        completadaConExito: false,
    },
    {
        id: 23223,
        precio: 550,
        habitacion: "standard",
        prepago: true,
        completadaConExito: true,
    },
    {
        id: 89232,
        precio: 650,
        habitacion: "superior",
        prepago: true,
        completadaConExito: false,
    },
];
/*
let algunaHaFallado = false;

for(let i = 0; i < reservas.length; i++){
    if(!reservas[i].completadaConExito){
        algunaHaFallado = true;
        break;
    }
}
console.log("ALguna reserva ha fallado: ", algunaHaFallado);

*/
let algunaHaFallado = false;
let i = 0;

while(i < reservas.length){
    if(!reservas[i].completadaConExito){
        algunaHaFallado = true;
        break;
    }

    i++;
}
console.log("ALguna reserva ha fallado: ", algunaHaFallado);

/////////// Ahora añade las que no estan completadas con exito y añadelas a otro Array 

let reservasFallidas = [];

for(let i = 0; i < reservas.length; i++){
    if(!reservas[i].completadaConExito){
        //reservasFallidas.push(reservas[i]);// reservas fallidas podria ser un const 
        reservasFallidas = [...reservasFallidas, reservas[i]];
    }
}
console.log("Las reservas fallidas son: ",reservasFallidas);
console.log(reservas);


///////////// Ahora cambia el estado de la habitacion de "standard" a "superior"

///Aqui metemos la primera reserva que tiene "standar" en un nuevo array y luego lo cambiamos a superior

const reservaModificada = [];

for(let i = 0; i < reservas.length; i++){
    if(reservas[i].habitacion === "standard"){
        reservaModificada.push(reservas[i]);
        reservaModificada[i].habitacion = "superior";
        break;
    }
}

console.log("Esta es la habitaciones que ha sido mejorada: ", reservaModificada);
console.log(reservas);

//LA FORMA DE ARRIBA LA HICE YO Y LA DE ABAJO EL PROFE

let indiceDeReserva = -1;

for(let i = 0; i < reservas.length; i++){
    if(reservas[i].habitacion === "standard"){
        indiceDeReserva = i;
        break;
     
    }
}

if(indiceDeReserva !== -1){
    const reservaModificada = {
        ...reservas[indiceDeReserva],
        habitacion: 'superior',
    };

    const nuevoArrayDeReservas = [
        ...reservas.slice(0, indiceDeReserva),
        reservaModificada,
        ...reservas.slice(indiceDeReserva + 1),
    ];
    console.log("Este es el nuevo Array con la reserva cambiada: ", nuevoArrayDeReservas);
}

console.log("estas son las reservas Originales: ", reservas);


///////////Aplicar descuento del 10 %

///////////AQUI CAMBIAS LA ARRAY ORIGINAL
//for(let i = 0; i < reservas.length; i++){
//    reservas[i].precio = reservas[i].precio * 0.9;
//}
//console.log("Este es el Array con descuento aplicado: ", reservas);

//////
let coleccionReservasConDescuentos = [];

for(let i = 0; i < reservas.length; i++){
    const reservaConDescuento = {
        ...reservas[i],
        precio: reservas[i].precio * 0.9,
    }

    coleccionReservasConDescuentos = [...coleccionReservasConDescuentos, reservaConDescuento];
}

console.log("ORIGINAL:  ", reservas );
console.log("DESCUENTOS APLICADOS: ", coleccionReservasConDescuentos);


////PRECIO TOTAL DE LAS RESERVAS

let precioTotalEuros = 0;

for(let i = 0; i < reservas.length; i++){
    precioTotalEuros += reservas[i].precio;
}

console.log("Este es el precio total: ", precioTotalEuros);

