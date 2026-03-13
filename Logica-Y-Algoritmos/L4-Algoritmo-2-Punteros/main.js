
function encontrarPar(arr, objetivo){
    //Puntero que inicia el principio de mi arreglo
    let izquierda = 0;

    //Puntero que inicia al final de mi arreglo
    let derecha = arr.length-1;

    //Mientras los punteros no se crucen
    while (izquierda < derecha){

        //Calcular suma de ambos valores
        let suma = arr[izquierda] + arr[derecha];

        //Si encontramos el objetivo
        if (suma === objetivo){
            //Regresar par encontrado
            return[arr[izquierda], arr[derecha]];

            //si la suma es menor que el objetivo
        } else if (suma < objetivo){
            //Nos movemos hacia la izquierda
            izquierda++;

        } else{
            //Si la suma es mayor
            derecha--;
        }
        
        //Si no encuentra ningun par        
    }
    return null;
}

let numeros = [2, 4, 7, 10, 11, 15, 20, 40, 80]
let resultado = encontrarPar(numeros, 9);
console.log(resultado);