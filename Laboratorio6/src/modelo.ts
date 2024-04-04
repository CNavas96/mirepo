interface Partida {
    score: number,
    cartaAdicional: number,
}

export const partida: Partida = {
    score: 0,
    cartaAdicional: 0,
};


interface Puntuacion {
    numeroParaGanar:  number,
    cuatroCopas: number,
    cincoCopas: number,
    seisCopas: number,
    sieteCopas: number,
    diezCopas: number,
}
export const puntuacion: Puntuacion = {
    numeroParaGanar:  7.5,
    cuatroCopas: 4,
    cincoCopas: 5,
    seisCopas: 6,
    sieteCopas: 7,
    diezCopas: 10,
};


//NO ME QUEDA CLARO DONDE AÑADIRLO EN EL CODIGO
export type EstadoPartida = 
    | "NO_HAS_LLEGADO_A_LA_PUNTUACION"
    | "HAS_LLEGADO_A_LA_PUNTUACION"
    | "HAS_SUPERADO_LA_PUNTUACION";
