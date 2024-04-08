import { vi } from "vitest";
import { obtenerEstadoPartida, dameCarta, puntuacionCartaObtenida,  } from "./motor";
import { EstadoPartida, partida,  } from "./modelo";


describe("obtenerEstadoPartida", () => {
    it("Deberia de devolver NO_HAS_LLEGADO_A_LA_PUNTUACION cuando el score llega a 7.5", () => {
        //Arrange
        const estadoEsperado : EstadoPartida = "NO_HAS_LLEGADO_A_LA_PUNTUACION"
        
        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoEsperado);

    });

    it("Deberia de devolver HAS_LLEGADO_A_LA_PUNTUACION cuando el score llega a 7.5", () => {
        //Arrange
        const estadoEsperado : EstadoPartida = "HAS_LLEGADO_A_LA_PUNTUACION"
        vi.spyOn(partida, "score", "get").mockReturnValue(7.5);

        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoEsperado);

    });

    it("Deberia de devolver HAS_SUPERADO_LA_PUNTUACION cuando el score llega a 7.5", () => {
        //Arrange
        const estadoEsperado : EstadoPartida = "HAS_SUPERADO_LA_PUNTUACION"
        vi.spyOn(partida, "score", "get").mockReturnValue(8);

        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoEsperado);

    });
});


describe("dameCarta", () => {
    it("Si es valor es 8 deberia de devolver 10" , () => {
        //Arrange
        const resultadoEsperado : number = 10;
        vi.spyOn(Math, "random").mockReturnValue(0.8);
       
        //Act
        const resultado = dameCarta();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si es valor es 9 deberia de devolver 11" , () => {
        //Arrange
        const resultadoEsperado : number = 11;
        vi.spyOn(Math, "random").mockReturnValue(0.9);
       
        //Act
        const resultado = dameCarta();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si es valor es 10 deberia de devolver 12" , () => {
        //Arrange
        const resultadoEsperado : number = 12;
        vi.spyOn(Math, "random").mockReturnValue(1);
       
        //Act
        const resultado = dameCarta();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});


describe("puntuacionCartaObtenida", () => {
    it("Si es valor es 10 la puntuacion deberia de ser 0.5" , () => {
        //Arrange
        const puntuacionEsperada : number = 0.5;
        const valor : number = 10;
       
        //Act
        const resultado = puntuacionCartaObtenida(valor);

        //Assert
        expect(resultado).toBe(puntuacionEsperada)
    });

    it("Si es valor es 11 la puntuacion deberia de ser 0.5" , () => {
        //Arrange
        const puntuacionEsperada : number = 0.5;
        const valor : number = 11;
       
        //Act
        const resultado = puntuacionCartaObtenida(valor);

        //Assert
        expect(resultado).toBe(puntuacionEsperada)
    });

    it("Si es valor es 12 la puntuacion deberia de ser 0.5" , () => {
        //Arrange
        const puntuacionEsperada : number = 0.5;
        const valor : number = 12;
       
        //Act
        const resultado = puntuacionCartaObtenida(valor);

        //Assert
        expect(resultado).toBe(puntuacionEsperada)
    });

});