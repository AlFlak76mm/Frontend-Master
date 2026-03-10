import { registrarDestino, mostrarItinerario } from "./viajes";

const iniciarApp = () => {
    registrarDestino("Londres", "2026-05-03", "Avion",{
        alojamiento: "hotel",
        noches: 4,
        personas: 3
    });

    mostrarItinerario();

}

iniciarApp();