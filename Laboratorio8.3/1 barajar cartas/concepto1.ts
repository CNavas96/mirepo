function shuffleArray<T>(array: T[]): T[] {
    // Creamos una copia del array para no modificar el original
    const newArray = array.slice();
    
    // Algoritmo de Fisher-Yates
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
};
