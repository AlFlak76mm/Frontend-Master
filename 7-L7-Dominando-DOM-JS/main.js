
//Paso 1: Seleccionar elementos a utilizar

let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");

//Paso 2: Crear funcion
function addItemButtonClick(){
    let itemText = itemInput.value;

    let newItem = document.createElement("li");

    //Crear elemento span
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    //Crear boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    itemList.appendChild(newItem);
    itemInput.value = "";
}

//Agregamos evento click y asignamos funcion que creamos
addItemButton.addEventListener("click", addItemButtonClick);




/* Practica en clase */
let inputUrgente = document.getElementById("inputUrgente");
let addUrgente = document.getElementById("addUrgente");
let listaUrgente = document.getElementById("listaUrgente");

function addItemUrgenteClick(){
    let itemText = inputUrgente.value;
    let newItem = document.createElement("li");
        let textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    listaUrgente.appendChild(newItem);
    inputUrgente.value = "";
}
addUrgente.addEventListener("click", addItemUrgenteClick);
