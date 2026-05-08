
import './style.css';

const botones = document.querySelectorAll('.opcion');
const resultado = document.getElementById('resultado');
const respuestaC = document.getElementById('eleccionC');

function pensarComputadora(eleccionJugador) {
  return new Promise((resolve) => {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    resultado.textContent = "Pensando...";

    setTimeout(() => {
      resolve(eleccionComputadora);
    }, 1500); // simula el tiempo de "pensar"
  });
}

botones.forEach(boton => {
  boton.addEventListener('click', async () => {
    const eleccionJugador = boton.dataset.choice;

    const eleccionComputadora = await pensarComputadora(eleccionJugador);
    
    respuestaC.textContent = eleccionComputadora;

    if (eleccionJugador === eleccionComputadora) {
      resultado.textContent = `Empate. Ambos eligieron ${eleccionJugador}.`;
    } else if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
      resultado.textContent = `¡Ganaste! ${eleccionJugador} vence a ${eleccionComputadora}.`;
    } else {
      resultado.textContent = `Perdiste. ${eleccionComputadora} vence a ${eleccionJugador}.`;
    }
  });
});