
//Practica
//Arreglo de objetos con al menos 5 productos aca bien aftercatabath

const productos = [
    {nombre: "Playera", precio: 15, categoria: "Ropa"},
    {nombre: "Desktop", precio: 800, categoria: "Electronica"},
    {nombre: "Libro", precio: 5, categoria: "Educacion"},
    {nombre: "Zapatos", precio: 50, categoria: "Ropa"},
    {nombre: "Telefono", precio: 150, categoria: "Electronica"},
];

//Encadenamiento de metodos
const resultado = productos

//Filter
.filter(producto => producto.precio < 100)  //Productos que cuesten menos de 100

//Sort
.sort((a, b) => a.nombre.localeCompare(b.nombre)) //localeCompare compara strings correctamente y ordenamos alfabeticamente

.map(producto => producto.nombre) //Devuelve solo el nombre del producto

console.log("Resultados de usar los metodos Filter, Sort y Map");
console.log(resultado);