
/* let arregloFrutas = ["Manzanas", "Aguacates", "Naranjas", "Peras", "Uvas", "Hotdogs"]; 
let cantidadFrutas = [];
let contenedor = 0;
let cTotalFrutas = 0;

for(let i=0; i<arregloFrutas.length; i++){
    contenedor = prompt("Ingresa la cantidad de "+arregloFrutas[i] + " que hay");
    cantidadFrutas.push(contenedor);
}

for(let i=0; i<arregloFrutas.length; i++){
    cTotalFrutas = cTotalFrutas+parseInt(cantidadFrutas[i]);
}

console.log(cTotalFrutas);
 */

let frutas = ["Manzana", "Aguacate", "Manzana", "Uva", "Platano", "Uva", "Gato"];

let tipos = [];
let cantidades = [];

for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];
    let posicion = tipos.indexOf(frutaActual);

    if (posicion !== -1) {
        cantidades[posicion]++;
    } else {
        tipos.push(frutaActual);
        cantidades.push(1);
    }
}

for (let i = 0; i < tipos.length; i++) {
    console.log(tipos[i] + ": " + cantidades[i]);
}
