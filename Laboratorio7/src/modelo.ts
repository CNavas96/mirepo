interface Partida {
    score: number,
    cartaAdicional: number,
    estadoPartida: EstadoPartida,
}

export const partida: Partida = {
    score: 0,
    cartaAdicional: 0,
    estadoPartida: "NO_HAS_LLEGADO_A_LA_PUNTUACION",
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

export type EstadoPartida = 
    | "NO_HAS_LLEGADO_A_LA_PUNTUACION"
    | "HAS_LLEGADO_A_LA_PUNTUACION"
    | "HAS_SUPERADO_LA_PUNTUACION";
