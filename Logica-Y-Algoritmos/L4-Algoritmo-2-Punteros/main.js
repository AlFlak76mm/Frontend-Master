
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


//Ejercicios; crear una funcion que revice si es palindromo
// anita lava la tina
//radar
//palabra extra aftercatabath


//Mi cosa fallida
function palindromoPalindroso(cadenaTexto){
    const letras = textoTextoso1.split("");
}



const textoTextoso1 = "anita lava la tina";
const textoTextoso2 = "radar";
const textoTextoso3 = "oso";


//El realizo por la profe
function esPalindromo(str){

    str = str.toLowerCase();
    let izq = 0;
    let der = str.length - 1;

    while (izq < der){
        //comparamos cada caracter del lado izq con el caracter del lado derecho
        if(str[izq] !== str[der]){
            return false;
        }
        //Si coinciden movemos los punteros de izq a derecha
        izq++;
        //El derecho retrocede hacia la izq
        der--;
    }
    //Encontramos el que si es palindromo
    return true;
}

let palabra = 'radar';
console.log(esPalindromo(palabra));

let palabra2 = 'anita lava la tina';
console.log(esPalindromo(palabra2));