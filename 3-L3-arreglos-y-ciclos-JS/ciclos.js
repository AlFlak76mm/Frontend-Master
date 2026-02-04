//While - Repite mientras la condicion sea true

let i = 1;

while(i<=3){
    console.log("while", i);
    i++ //Iteracion = i + 1
}


/* let entrada = "";

while(entrada !== "salir"){
    entrada = prompt("Escribe algo");
}

console.log("Bien, saliste"); */



//Arrays - Arreglos

let frutas = ["Manzana", "Pera", "Gato", "Cereza", "Cesped"];
console.log(frutas[2]);
console.log(frutas.length);

for(let i = 0; i<frutas.length;i++){
    console.log(frutas[i]);
}


let alumnos = []; //Arreglo vacio bien aftercatabath
//metodo push - agrega al final
alumnos.push("Ana");
alumnos.push("Juancho");
alumnos.push("Fernanda");
alumnos.push("Natalia");
console.log(alumnos);

//metodo pop - elimina al ultimo
alumnos.pop();
console.log(alumnos);

//metodo unshift - agrega al inicio
alumnos.unshift("Nina");
alumnos.unshift("Paco");
alumnos.unshift("Mosco");
console.log(alumnos);

//metodo shift - quita el primero
alumnos.shift();
console.log(alumnos); 


//Arreglo aca bien aftercatabath con tematica de lista de super

//Esta solucion es inncesariamente complicada, no hay una necesidad real para usar un arreglo bidireccional
let valorIngresado = ""
let listaSuper = [];
let nLista = 1;

while(valorIngresado !=="salir"){
    valorIngresado = prompt("Ingresa tu articulo a la lista")
    listaSuper.push([nLista, valorIngresado]);
    nLista ++;
}

console.log(listaSuper);

for(let i=0;i<listaSuper.length;i++){
    console.log("");
}


//Version sencilla y efectiva vista en clase
let producto = "";
let list = [];

while(producto !== "salir"){
    producto = prompt("Ingresa algo");
    if (producto !=="salir"){
        list.push(producto);
    }
}

for(let i = 0; i<list.length;i++){
    console.log((i+1) + " " + list[i]);
}




