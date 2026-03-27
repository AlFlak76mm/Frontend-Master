
/* 
[2, 1, 5, 4, 1, 3, 2]

Ventana de 3

[2, 1, 5] = 8

[1, 5, 4] = 10

Quitar el numero que ya no esta
Agregar el numero nuevo
*/

function obtenerSumaMaxima(arregloNumeros, tamVentana){
    //Validamos que no este vacia
    if (tamVentana > arregloNumeros.length){
        return null;
    }

    let sumaActualDeVentana = 0;

    //Calculamos la suma de la primera ventana
    for (let indice = 0; indice < tamVentana; indice++){
        sumaActualDeVentana += arregloNumeros[indice];
    }

    let sumaMaximaEncontrada = sumaActualDeVentana;

    //Nos movemos a la otra ventana
    for (let indice = tamVentana; indice < arregloNumeros.length; indice++){ //Deslizamos la ventana
        let numeroQueSale = arregloNumeros[indice-tamVentana]; //Quitamos el numero que ya no esta
        let numeroQueEntra = arregloNumeros[indice]; //Y agregamos el nuevo numero

        //Ajustamos suma
        sumaActualDeVentana = sumaActualDeVentana - numeroQueSale + numeroQueEntra;

        //Comparacion con el maximo
        if(sumaActualDeVentana > sumaMaximaEncontrada){
            sumaMaximaEncontrada = sumaActualDeVentana;
        }
    }

    return sumaMaximaEncontrada;
}



let visitasPorMinuto = [10, 23, 2, 49, 50, 3, 99, 1];
let maxTrafico = obtenerSumaMaxima(visitasPorMinuto, 3);
console.log(maxTrafico);