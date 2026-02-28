
let practica = document.getElementById("practica");
let comentario = document.getElementById("comentario");
let areaComentarios = document.getElementById("areaComentarios");

practica.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que la pagina se refresque

    const texto = comentario.value; //Variable con el valor de comentario; textarea

    const divComentario = document.createElement("div"); //Se crea un DIV para hacer el rol de contenedor
    divComentario.classList.add("comentario"); //Se agrega la clase css comentario al DIV

    const pTexto = document.createElement("p");
    pTexto.textContent = texto;

    const fecha = document.createElement("div"); //DIV que contendra la fecha
    fecha.classList.add("fecha"); 
    fecha.textContent = new Date().toLocaleDateString(); //Se asigna como conteniedo del DIV la fecha local del equipo

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    btnEliminar.addEventListener("click", ()=>{ //Evento de click
        divComentario.remove(); //Se elimina el DIV divComentario
    });

    divComentario.appendChild(pTexto);
divComentario.appendChild(fecha);
divComentario.appendChild(btnEliminar);

areaComentarios.appendChild(divComentario);

comentario.value = "";

});


