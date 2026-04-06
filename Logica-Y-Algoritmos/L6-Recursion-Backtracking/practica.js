

const regalosArr = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


function encontrarRegalo(regalosArr, regaloN, index = 0){

    if (index === regalosArr.length) {
        return `${regaloN} no está en la lista.`;
    }
 
    if (regaloN === regalosArr[index]){
        return `${regaloN} está en la posición ${index}`;
    } else{
        return encontrarRegalo(regalosArr, regaloN, index+1);
    }

}

let regaloAftercatabath = "Lego";

console.log(encontrarRegalo(regalosArr, regaloAftercatabath));

let regaloAftercatabath2 = "Camión";

console.log(encontrarRegalo(regalosArr, regaloAftercatabath2));
