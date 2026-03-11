
//Un arreglo puede tener cualquier tipo de dato en Js
const listaDeCompras = ['leche', 'huevos', 'pan', 'tortillas'];
//de preferencia se usa const

//Se puede hacer una mescolanza de tipos
const mezcla = ['La Sirenita', 23, true, false, {rol: 'estudiante'}, ['sublista']];

//Imprimir arreglos
console.log(listaDeCompras);
console.log(mezcla);

//Aunque usemos const podemos modificar el contenido del arreglo
listaDeCompras.push('mantequilla'); //Agregar un elemento al final
//Lo que no se puede es reasignar la referencia

//Usar let solo si se va a reemplazar el arreglo completo
let numeros = [1, 3, 67, 30];
numeros = [35, 8, 10, 45];
console.log(numeros);

//Indice
console.log(mezcla[1]);

//Si se busca un elemento inexistente, entrega Undefined
console.log(mezcla[78]);

//Cuantos elementos tenemos
console.log(mezcla.length);

//Acceder al ultimo elemento
console.log(mezcla[mezcla.length -1]);

//Forma tradicional de recorrer arreglos
const frutas = ['pera', 'papaya', 'sandia', 'melon'];
for(let i = 0; i < frutas.length; i++){
    console.log("Indice: ", i, " Valor: ", frutas[i]);
}

frutas.unshift('mayonesa'); //Agregar al inicio del arreglo
frutas.unshift('Plutarco');
console.log(frutas);

frutas.shift() //Quitar elemento del inicio
console.log(frutas);

frutas.pop();//Quitar el ultimo elemento
console.log(frutas);


const usuarios = [
    {id: 1, nombre: 'Ana'},
    {id: 2, nombre: 'Ana2'},
    {id: 3, nombre: 'Ana3'},
    {id: 4, nombre: 'Ana4'},
]

//El metodo find() sirve para encontrar el primer elemento que cumpla con una condicion
//Usarlo cuando se necesite una sola cosa
const encontrado = usuarios.find((u) => u.id === 2);
console.log(encontrado);

//El metodo filter() crea un arreglo con los elementos que cumplen una condicion
//No modifica el arreglo original
const pares = numeros.filter((n) => n % 2 === 0);
console.log('Original: ', numeros);
console.log('Copia de Pares: ', pares);

//El metodo map() crea un nuevo arreglo pero con el resultado de aplicar una funcion
const precios = [100, 200, 300, 400, 500];
const precioConIva = precios.map((p) => {
    const iva = p * 0.16;
     const total = p + iva;
    return total; //Esto se guarda en el nuevo arreglo
});

console.log('Original: ', precios);
console.log('Con IVA: ', precioConIva);

//El metod forEach() No es para construir un nuevo arreglo
const apellidos = ['Villanueva', 'Velazquez', 'Serrano'];
apellidos.forEach((apellido, index) => {
console.log('Posicion ', index, ' Apellido ', apellido);
})


//El metodo some() nos va decir si existe al menos un elemento que cumpla con la condicion
const preciosNuevos = apellidos.some((p) => p === 'Serrano');
console.log(preciosNuevos);

//El metodo every() es si todos cumplen
//El metodo sort() ordena (y normalmente muta)
