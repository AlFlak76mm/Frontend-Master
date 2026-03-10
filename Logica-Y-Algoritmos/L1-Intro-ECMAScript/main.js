//Operador nullish coalescing
let nombre = "tio Paco";
//Se activa ?? cuando la variable es null / undefined
let nombreFinal = nombre ?? "Invitado"
console.log(nombreFinal);


let edad;
let edadFinal = edad ?? 18;
console.log(edadFinal);


//OR
let numero = 0;

let resultado = numero || 10; //Va a tomar el valor como falso si utilizamos Or
console.log(resultado);



//spread operator ...
let numeros = [1, 2, 3];

let copia = [...numeros];

console.log(copia);

//Poder copiar arreglos sin modificar el original

let frutas = ['manzana', 'platano'];

let nuevasFrurras = [...frutas];
nuevasFrurras.push('mango');
console.log(nuevasFrurras);