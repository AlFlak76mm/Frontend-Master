
//Esta busqueda sirve para un conjunto de datos ordenados


function binarySearch(arr, target, low=0, high=arr.length-1){

    console.log(`Buscando el numero ${target} entre los indices ${low} y ${high}`);

    //caso base, donde ya no podamos buscar
    if(low>high){
        return -1; //No lo encontro
    }

    //Paso 1 - Dividir - Definir el punto medio
    let mid = Math.floor((low + high)/2);
    console.log(`Mid: ${mid}, Valor: ${arr[mid]}`);

    //Paso 2 - Conquistar
    if(arr[mid] === target){
        console.log(`Encontrado en el indice ${mid}`);
        return mid; //Encontro valor
    }

    //Paso 3 - Seguir dividiendo
    if(arr[mid] > target){
        console.log("Buscamos en la mitad izquierda");
        //Debido a que la mitad es mayor al target, busca a su izquierda
        return binarySearch(arr, target, low, mid-1);
    }else {
        ("Buscamos en la mitad derecha");
        //Buscar en la mitad derecha
        return binarySearch(arr, target, mid+1, high);
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));