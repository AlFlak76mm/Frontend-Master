
// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
      if (mesasSolicitadas <= mesasDisponibles){
        resolve("Hay suficientes mesas disponibles");
      }else{
        reject("No hay suficientes mesas disponibles");
      }
      // de lo contrario, recházala con un mensaje adecuado.
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // Completa la lógica aquí: Simula un envío de correo. Usa Math.random() 
        let valorRandom = Math.floor(Math.random() * 10) + 1;
        
        // para simular si el correo se envió correctamente o si ocurrió un error.
        if (valorRandom <= 8){
            resolve(`Correo enviado correctamente a: ${nombreCliente}`);
        } else{
            reject("Error al enviar el correo");
        }
    
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log(disponibilidad);

    if(disponibilidad){
    console.log("Enviando confirmación de reserva...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
    }


    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas
//hacerReserva("Jose Pérez", 7);