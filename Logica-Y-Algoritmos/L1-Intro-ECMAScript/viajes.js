//importar funcion que calcula costos
import { calcularCosto } from "./costos";


//Se utiliza const porque no vamos a cambiar el arreglo, solo agregar elementos
const destinos = [];


//Funcion para crear un nuevo viaje
export const registrarDestino = (
    destino,
    fecha,
    transporte,
    {alojamiento = "hotel", noches = 0, personas = 1} ={}
) => {
    //Crear un objeto que represente un viaje

    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        alojamiento,
        noches,
        personas,

        //Calcular el costo
        costo: calcularCosto({
            destino,
            transporte,
            alojamiento,
            noches,
            personas
        })
    };

    destino.push(nuevoViaje);

    return nuevoViaje;

};

export const obtenerItinerario = () => {
    return[...destinos];
}

export const mostrarItinerario = () => {
    if(destinos.length = 0){
        console.log("no tiene viajes registrados");
        return;
    };
    destinos.forEach((viaje, idx) => {
        console.log(`${idx+1}`);

        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento}`);
        console.log(`Personas: ${viaje.personas}`);

        console.log(`Costo total aproximado: ${viaje.costo}`);
        console.log('-------------------------------');
    })
}