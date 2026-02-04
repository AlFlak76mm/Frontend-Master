
let contador = 1;

while (contador <= 10){
    console.log(contador);
    contador++;
}

contador = 0;

while (contador <= 10){
    if(contador % 2 === 0 && contador != 0){
        console.log(contador);
    }
    contador++;
}