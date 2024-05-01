import { validarClave } from "./main";


describe("validarClave", () => {
    it("debería devolver que la contraseña es válida", () => {
        // arrange
        const nombre = "Juan";
        const clave = "laClaveFantastica5?";
        const listaNombreComunes = [
            "password",
            "123456",
            "qwerty",
            "admin",
        ];

        // act
        const resultado = validarClave(nombre, clave, listaNombreComunes);

        // assert
        expect(resultado).toEqual({
            esValida: true,
            error: "",
        });
    });

    it("debería devolver error si la contraseña contiene el nombre del usuario", () => {
        const nombre = "Juan";
        const clave = "claveJuan5?";
        const listaNombreComunes = ["password", "123456", "qwerty", "admin"];

        const resultado = validarClave(nombre, clave, listaNombreComunes);

        expect(resultado).toEqual({
            esValida: false,
            error: "La clave no puede contener el nombre",
        });
    });

    it("debería devolver error si la contraseña no tiene números", () => {
        const nombre = "Juan";
        const clave = "claveFantastica?";
        const listaNombreComunes = ["password", "123456", "qwerty", "admin"];

        const resultado = validarClave(nombre, clave, listaNombreComunes);

        expect(resultado).toEqual({
            esValida: false,
            error: "La clave debe contener al menos un número",
        });
    });

    it("debería devolver error si la contraseña contiene una palabra común", () => {
        const nombre = "Juan";
        const clave = "admin23?56";
        const listaNombreComunes = ["password", "123456", "qwerty", "admin"];

        const resultado = validarClave(nombre, clave, listaNombreComunes);

        expect(resultado).toEqual({
            esValida: false,
            error: "La clave no puede contener una palabra común",
        });
    });

    it("debería devolver error si la contraseña no tiene un caracter especial", () => {
        const nombre = "Juan";
        const clave = "123Juan56"; 
        const listaNombreComunes = ["password", "123456", "qwerty", "admin"];
        
        const resultado = validarClave(nombre, clave, listaNombreComunes);

        expect(resultado).toEqual({
            esValida: false,
            error: "La clave debe contener al menos un carácter especial (@,#,+,_ ...)",
        });
    });

});
 