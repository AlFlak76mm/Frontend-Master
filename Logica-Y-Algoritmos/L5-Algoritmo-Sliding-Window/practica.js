
// Solucion simple - Es cuestionable si se esta usando el algoritmo Sliding Window, pero cumple con los requisitos de la practica.

function palabraMasLarga(texto){

    const palabras = texto.split(" ");

    let masLarga = '';

    let pActual = 0;

    for(let i=0; i<palabras.length; i++){

        pActual = palabras[i];

        if (pActual.length>masLarga.length){
            masLarga = pActual;
        }

    }
    return masLarga;
}

const texto = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(palabraMasLarga(texto));



//Usando (tratando mas bien dicho) el metodo Sliding Window
function palabraMasLarga(texto2) {
    const palabras = texto2.split(" ");
    let masLarga = '';

    let left = 0;
    let right = 0;

    while (right < palabras.length) {
        let ventanaActual = palabras[right];

        if (ventanaActual.length > masLarga.length) {
            masLarga = ventanaActual;
        }

        left++;
        right++;
    }

    return masLarga;
}

const texto2 = "JavaScript es un lenguaje de programación increíble para aprender.";

console.log(palabraMasLarga(texto)); // programación