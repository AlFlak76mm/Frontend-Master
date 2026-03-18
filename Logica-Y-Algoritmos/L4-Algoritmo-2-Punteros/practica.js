
//Re
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {

            if(arr[inicio].charAt(0) !== arr[siguiente].charAt(0)){
            inicio++;
            siguiente++;
            } else{
                return arr.slice(inicio, siguiente+1);
            }
    }
    return null;
}
console.log(encontrarPareja(invitados));