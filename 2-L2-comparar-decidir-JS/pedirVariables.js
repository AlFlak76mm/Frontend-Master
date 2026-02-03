
console.log("Hola, me llamo Ana");
console.log("Como te llamas?");

let nombre = prompt("Como te llamas?");
console.log(nombre);

let fecha = prompt("cuando es tu cumple?");
console.log(fecha);

let mascotas = prompt("Cuantas mascotas tienes?");
console.log(mascotas);


//cosa super aftercatabath que inserta el valor en el documento html
document.write(nombre);


//alerta aca que alerta al usuario
alert(fecha);


/*


Las alertas y el .write nos permite depurar y hacer pruebas en el codigo
No se muetran en el resultado final


*/


//Mas labor de la clase
let perros = prompt("Cuantos perros tienes?");
let gatos = prompt("Cuantos gatos tienes?");

perros = parseInt(perros); //conversion de string a int | numero entero
gatos = parseInt(gatos);

alert("tienes un total de " + (perros+gatos) + " mascotas");


let aguacates = Number(prompt("Cuantos aguacates tienes?"));
let tomates = Number(prompt("Cuantos tomates tienes?"));

console.log("En total tienes "+ (aguacates+tomates) + " frutas, porque si, son frutas");