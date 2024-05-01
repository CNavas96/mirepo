import "./style.css";
// Pistas:

// Si la clave no tiene mayúsculas y minúsculas, el error será: "La clave debe de tener mayúsculas y minúsculas".
// Si la clave no tiene números, el error será: "La clave debe de tener números".
// Si la clave no tiene caracteres especiales, el error será: "La clave debe de tener caracteres especiales".
// Si la clave no tiene una longitud mínima de 8 caracteres, el error será: "La clave debe de tener una longitud mínima de 8 caracteres".
// Si la clave tiene el nombre del usuario, el error será: "La clave no debe tener el nombre del usuario".
// Si la clave tiene palabras comunes, el error será: "La clave no debe de contener palabras comunes".

const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
    "xDwelcome328?",
];

interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

//1. La clave debe de tener mayúsculas y minúsculas.
const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    let tieneMayuscula = false;
    let tieneMinuscula = false;

    for (let i = 0; i < clave.length; i++) {
        const letra = clave.charAt(i);

        if (letra === letra.toUpperCase() && letra.toLowerCase() !== letra) {
            tieneMayuscula = true;
        }

        if (letra === letra.toLowerCase() && letra.toUpperCase() !== letra) {
            tieneMinuscula = true;
        }


        if (tieneMayuscula && tieneMinuscula) {
            break; 
        }
    }

    const esValida = tieneMayuscula && tieneMinuscula;

    return {
        esValida,
        error: esValida ? "" : "La clave debe contener mayúsculas y minúsculas",
    };
};

//2. La clave debe de tener números.
const tieneNumeros = (clave: string): ValidacionClave => {

    let numeros = /\d/;
    const esValida = numeros.test(clave);
 
    
    return {
        esValida,
        error: esValida ? "" : "La clave debe contener al menos un número",
    };
};


// 3. La clave debe de tener caracteres especiales (@,#,+, _, ...)
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
   const caracteresEspeciales = /[@#,+_!?%&*-.;:]/; 

   const esValida = caracteresEspeciales.test(clave);

   return {
       esValida,
       error: esValida ? "" : "La clave debe contener al menos un carácter especial (@,#,+,_ ...)",
   };
};

// 4. La clave debe de tener una longitud mínima de 8 caracteres.
const tieneLongitudMinima = (clave: string): ValidacionClave => {
    const longitudClave = clave.length;
    let esValida = false;

    if( longitudClave > 7){
        esValida = true;
    }
//TODO
    return{
        esValida,
        error: esValida ? "" : "La clave tiene que tener una longitud minimo de 8 caracteres",
    }
};


// 5. La clave no debe tener el nombre del usuario.
const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => { 
    const esValida = !clave.includes(nombreUsuario);

    return{
        esValida,
        error: esValida ? "" : "La clave no puede contener el nombre"
    }
};

// 6. La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const contienePalabraComun = commonPasswords.some((comun) => clave.includes(comun));

    const esValida = !contienePalabraComun;

    return{
        esValida: esValida,
        error: esValida ? "" : "La clave no puede ser una palabra común"
    }
};


export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    let contraseñaValidandose = {
        esValida: true,
        error: "",
    };

    // Verificamos cada validación y asignamos el primer error encontrado
    const validaciones: ValidacionClave[] = [
        tieneMayusculasYMinusculas(clave),
        tieneNumeros(clave),
        tieneCaracteresEspeciales(clave),
        tieneLongitudMinima(clave),
        tieneNombreUsuario(nombreUsuario, clave),
        tienePalabrasComunes(clave, commonPasswords),
    ];

    console.log(validaciones);
    
    for (const validacion of validaciones) {
        if (!validacion.esValida) {
            let mensajeError = validacion.error;

            if (mensajeError === undefined) {
                mensajeError = "Error desconocido";
            }

            contraseñaValidandose = {
                esValida: false,
                error: mensajeError,
            };

            break; 
        }
    }


    return contraseñaValidandose;
};


const contraseña = validarClave("Juan", "ilov9Z*88", commonPasswords);

console.log(contraseña);

