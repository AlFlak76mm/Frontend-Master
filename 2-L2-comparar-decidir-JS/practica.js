
let nota = Math.floor(Math.random() * 100) + 1;
console.log(nota);

if (nota >= 90){
    console.log("Excelente");
} else if(nota >= 75){
    console.log("Bien");
} else if(nota >=60){
    console.log("Suficiente");
} else{
    console.log("No aprueba");
}