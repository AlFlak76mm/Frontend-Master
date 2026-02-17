
let librosLeidos = ["El chaneque de san benardo", "El pez multicolor"];

libro=prompt("Agrega un libro");

const agregarLibro = (libro) =>{
    librosLeidos.push(libro);
}

console.log(agregarLibro(libro));

const mostrarLibroaLeidos = () =>{
    for(let i=0; i<librosLeidos.length;i++){
        console.log(librosLeidos[i]);
    }
}

/* console.log(agregarLibro("Juancho y el gato perro"));
console.log(mostrarLibroaLeidos());

console.log(agregarLibro("Texto de ejemplo")); */
console.log(mostrarLibroaLeidos());




