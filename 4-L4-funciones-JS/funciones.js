
function holaMundo(nombre){ //nombre es un parametro
    //Lo que sea
    return (nombre +", eres mi mundo");//se retorna resultado
}

holaMundo("Juancho");

console.log(holaMundo("Juancho"));

let piombre = holaMundo("PollitoPio");
console.log(piombre);



function sumarAftercatabath(a, b){
    console.log(a+b);
}
sumarAftercatabath(4, 8);


function restaHigienica(n1, n2){
    let resultado = n1 - n2;
    return resultado;
}
console.log(restaHigienica(83, 33));

let resultado; //variable global
console.log(resultado);//Undefined


function sinReturn(){
    let x = 5;
}
console.log(sinReturn());


function multiplicarChiapaneco(d1, d2){
    return d1 * d2;
}
console.log(multiplicarChiapaneco(13));//NaN : Not an number


//Funciones aca bien flecha
//Arrow function
const dividir = (a, b) => a/b;
console.log(dividir(23, 3));

//Con return
const pluma = (a, b) => {
    return a + b;
}
console.log(pluma(34, 123));


const mutis = (a, b) =>{  return a * b; }
console.log(mutis(123, 78));



//Funciones anonimas | no requieren nombre
//Callbacks
setTimeout(function(){
    console.log("esto se ejecuta al rato");
}, 5000);


//Cuando no usar esas cosas anonimas
//Se tiene que reutilizar muchas veces
//Tiene logica grande
//Necesita ser testeada
//Se necesita claridad

