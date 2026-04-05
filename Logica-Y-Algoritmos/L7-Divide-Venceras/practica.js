
function findMax(arr, inicio = 0, fin = arr.length-1){

    if(inicio === fin){
        return arr[inicio];
    }

    let medio = Math.floor((inicio  + fin)/2);

    let maxIzquierda = findMax(arr, inicio, medio);

    let maxDerecha = findMax(arr, medio+1, fin);

    if(maxIzquierda>maxDerecha){
        return maxIzquierda;
    } else{
        return maxDerecha;
    }

}

const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers));