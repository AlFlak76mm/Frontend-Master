
let comentario = document.getElementById("comentario");

let btnComentario = document.getElementById("btnComentar");

const areaComentarios = document.getElementById("caja-comentarios");

let nuevoComentario = document.createElement("p");

nuevoComentario.textContent = comentario.textContent;


btnComentario.addEventListener("click" , ()=>{
    document.body.appendChild(nuevoComentario);
/*     document.body.areaComentarios.appendChild(nuevoComentario); */
})