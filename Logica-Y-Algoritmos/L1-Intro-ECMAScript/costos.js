
const COSTO_DESTINO = {
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Madrid: 350,
    Tokyo: 700,
    Tlaxcala: 1500
};

//Objeto donde guardamos el costo adicional del transporte
const COSTO_TRANSPORTE = {
    Tren: 200,
    Autobus: 60,
    Avion: 180,
    Delfin: 400
};

//Objeto por noche dependiendo del alojamiento
const COSTO_ALOJAMIENTO_POR_NOCHE = {
    Hotel: 90,
    Hostal: 30,
    AirBnB: 40,
    Puente: 10
};

//Funcion que va a recibir los datos del viaje
export const calcularCosto = ({
    destino,
    transporte,
    alojamiento,
    noches = 0,
    personas = 1
}) => {
    const baseDestino = COSTO_DESTINO[destino] ?? 0;

    const extraTransporte = COSTO_TRANSPORTE[transporte] ?? 0;

    const costoNoche = COSTO_ALOJAMIENTO_POR_NOCHE[alojamiento] ?? 0;

    let subtotal = (baseDestino + extraTransporte) * personas;

    //Sumamos el coste del alojamiento
    //noches * precio por noche
    subtotal += noches * costoNoche;

    const descuento = 
    personas >= 5 ? 0.12: //12% de descuento
    personas >= 3 ? 0.07: //7% de descuento
    0;

    //Aplicando el descuentp al subtotal
    const total = subtotal * (1-descuento);

    //Redondear el resultado
    return Math.round(total);
}

//Este seria la extructura a realizar si const descuento se hiciere de la forma tradicional
/* let descuentoChiapaneco;

if(personas >= 5){
    descuentoChiapaneco = 0.12;
} else if (personas >= 3){
    descuentoChiapaneco = 0.07
} else{
    descuentoChiapaneco = 0;
}; */