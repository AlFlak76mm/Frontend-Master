
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