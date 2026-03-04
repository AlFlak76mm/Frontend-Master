
if(true){
    var nombre = 'Ana';
}
console.log(nombre); // var NO respeta el alcance de bloque

//var permite redeclarar y reasignar aca bien maniacote
var x = 1;
var x = 'vaca';
var x = true;



if (true){
    let apellido = 'Villanueva'; //Reference Error: respeta el scope de bloque
}
//console.log(apellido); // let si respeta el alcance de bloque

let y = 10;
//let y = 20;


//No permite redeclarar ni reasignar
const z = 20;

const usuario = {name: 'Fernanda', edad:25};
usuario.edad = 33;

console.log(usuario);



//Hoisting con var/undefined
console.log(mascota);
var mascota = "lentejo";
console.log(mascota);


//TDZ: no podemos acceder a una variable antes de que se inicialice
//console.log(ciudad);
let ciudad = "Ixztapalapa";
console.log(ciudad);



//funcion tradicional | this depende de como se llama la funcion
function sumar(a, b){
    return a + b;
}

//funcion de flecha, return explicito | this se hereda en el contexto que fue creado
const chumar = (c, d) => {
    return c + d;
}

//funcion de flecha, return implicito
const lucrar = (a, b) => a + b;

//return implicito simplificado
const duplicar = n => n *2;
console.log(duplicar(4));

//retornando un objeto con return implicito
const crearUser = (nombre) => ({nombre: nombre, activo:true});
console.log(crearUser("Ana"));



let perro = 'Chupy';
let comida = 'pollo';
// Concatenacion 
let frase1 = 'Hola soy ' + perro + " y me gusta el " + comida;
console.log(frase1);
//template literal
let frase2 = `Hola soy ${perro} y mi platillo favorio es el ${comida}`
console.log(frase2);


//Desestructuracion
const persona = {numbre: 'Maeva', edad: 22, ciudad:'Tlaxcala'}
const {numbre, edad} = persona;
console.log(numbre);
console.log(edad);


const promesa = new Promise(function (resolve, reject) {
    if(exito){ //Un if evalua algo
        resolve('Todo salio bien');
    }else{
        reject('Algo salio mal');
    }
});

promesa.then(function(resultado){
    console.log(resultado);
});