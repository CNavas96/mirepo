
var hoteles = {
    Yaramar:{
        name: "Yaramar",
        location: "Fuengirola",
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/0e/42/95/ef/hotel-yaramar-photo-taken.jpg",
    },

    Ilunion:{
        name: "Ilunion",
        location: "Málaga",
        imagen: "https://www.ilunionhotels.com/cache/b0/77/b077aa84155fdb5a92254b51c04a217f.jpg",
    },

};



var seleccionhoteles = prompt("Introduce nombre del hotel: Yaramar o Ilunion");

document.getElementById("name-hotel").innerHTML = hoteles[seleccionhoteles].name;

document.getElementById("location-hotel").innerHTML = hoteles[seleccionhoteles].location;

document.getElementById("imagen-hotel").src = hoteles[seleccionhoteles].imagen;



//Puntuacion
// var score = prompt("Puntuacion de 1 a 5")

// document.getElementById("score-hotel").innerHTML = score + "estrellas";

var estrellitas = {
    uno:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
        
};

var puntuacion = prompt("Que puntuacion le das al hotel?: uno, dos..., cinco.")

document.getElementById("score-hotel").innerHTML = estrellitas[puntuacion];




// PREGUNTAR SI QUIERE SER ANONIMO
var anonymous = confirm("Quiere que la reseña sea anónima?");

document.getElementById("anonimo").checked = anonymous;






