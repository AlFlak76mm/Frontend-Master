
//Ejercicio 1
function operar (a, b, operacion){
  return operacion(a, b);
}

console.log(operar(3, 4, (x, y) => x + y));
console.log(operar(10, 5, (x, y) => x - y));



//Ejercicio 2
const entrada = '{"nombre":"Diego","edad":17,"activo":true}';
const objP = JSON.parse(entrada);
objP.edad += 1;
const entradaN = JSON.stringify(objP);
console.log(entradaN);



//Ejercicio 3
const a = "{'nombre': 'Ana'}";
const b = '{"nombre": "Ana",}';
const c = '{"nombre": "Ana"}';

function lectorJSONs(a, b, c){
    try {
      const datosA = JSON.parse(a);
      
    } catch (parseError) {
      console.log("No es el a");
    }
}