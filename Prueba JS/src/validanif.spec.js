/*
Caso 1: 12345678Z, debería de devolver true.
Caso 2: 73536276D, debería de devolver true.
Caso 3: 72184153X, debería de devolver true.
Caso 4: 36218255V, debería de devolver true.
Caso 5: 21137848C, debería de devolver true.
Caso 5: 12345678A, debería de devolver false.
Caso 6: 98765432A, debería de devolver false.
Caso 7: 33333333C, debería de devolver false
*/

import { validarNIF } from "./validanif";



describe("validación de NIF", () => {
    it.each([
        [12345678, "Z", true],
        [73536276, "D", true],
        [72184153, "X", true],
        [36218255, "V", true],
        [21137848, "C", true],
        [12345678, "A", false],
        [98765432, "A", false],
        [33333333, "C", false],
    ])(
        "EL NIF: %s%s es valido  %s", (numero, letra, resultadoEsperado) => {
            //Act
            const resultado = validarNIF(numero, letra);

            //Assert
            expect(resultado).toBe(resultadoEsperado);
        });

        it("Lanza una excepción si el NIF no tiene 8 cifras", () => {
            // Arrange
            const numero = "1234567";
            const letra = "Z";
            // Assert
            expect(() => validarNIF(numero, letra).toThrow());
           });
           

        it("Lanza una excepción si la letra del NIF tiene longitud distinta a 1", () => {
            // Arrange
            const numero = "12345678";
            const letra = "ZZ";
            // Assert
            expect(() => validarNIF(numero, letra).toThrow());
           });
});