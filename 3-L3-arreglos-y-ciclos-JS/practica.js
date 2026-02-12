
let arregloFrutas = ["Manzanas", "Aguacates", "Naranjas", "Peras", "Uvas", "Hotdogs"]; 
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


