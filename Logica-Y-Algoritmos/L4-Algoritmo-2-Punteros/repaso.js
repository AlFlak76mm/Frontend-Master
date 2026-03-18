function eliminarDuplicados(arr) {
    let puntero = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[puntero]) {
            puntero++;
            arr[puntero] = arr[i];
            /* console.log(arr); */
        }
    }
    return arr.slice(0, puntero+1);
    //El corte del arreglo comienza en 0 hasta (sin incluir) el puntero+1; que es 4
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4]));
