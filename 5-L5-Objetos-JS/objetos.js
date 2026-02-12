
//Un objeto es una coleccion de pares clave - valor (propiedades)

const disco = {
    titulo: "Odio con todo mi ser Windows 11",
    artista: "Microsoft",
    anio: 2015,
    disponible: true,

    //propiedad de tipo arreglo
    canciones: ["Windows XP", "Windows Vista", "Windows 7", "Windows 8", "windows 10"],

    //Podemos guardar acciones relacionados con los datos
    mostrarInfo(){
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`)
        //this apunta a este objeto
    },

    //metodo que liste las canciones
    mostrarCanciones(){
        this.canciones.forEach((cancion, i) =>{
        console.log(`${i + 1} ${cancion}`);
        }
    )},

    agregarCancion(nombre){
        this.canciones.push(nombre);
        console.log(`Cancion agregada: ${nombre}`)
    },

    eliminarCancion(nombre){

    },

    cambiarEstadoDisco(){

    }
}

//acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

//Acceder a los datos con notacion de corchetes
console.log(disco['titulo']);
console.log(disco['disponible']);

disco.mostrarInfo();
disco.mostrarCanciones();
disco.agregarCancion("Windows Server");