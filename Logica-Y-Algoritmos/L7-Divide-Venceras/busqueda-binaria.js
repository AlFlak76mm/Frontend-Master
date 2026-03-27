
//Esta busqueda sirve para un conjunto de datos ordenados

function binarySearch(arr, target, low=0, high=arr.length-1){

    //caso base, donde ya no podamos buscar
    if(low>high){
        return -1; //No lo encontro
    }

    //Paso 1 - Dividir - Definir el punto medio
    let mid = Math.floor((low + high)/2);

    //Paso 2 - Conquistar
    if(arr[mid] === target){
        return mid; //Encontro valor
    }

    //Paso 3 - Seguir dividiendo
    if(arr[mid] > target){
        //Debido a que la mitad es mayor al target, busca a su izquierda
        return binarySearch(arr, target, low, mid-1);
    }else {
        //Buscar en la mitad derecha
        return binarySearch(arr, target, mid+1, high);
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5));