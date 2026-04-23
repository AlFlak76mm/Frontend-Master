
const fs = require ('fs');

//1.Consultamos una API publica
//2.Listar los primeros 5 usuarios
//3.Para cada usuario, mostrar cuantos post tiene
//4.Manekjar errores si algo falla
const API = "https://jsonplaceholder.typicode.com";

function obtenerUsuarios(){
    return fetch(`${API}/users`)
    .then((res)=>{
        if (!res.ok){
            throw new Error("Error al obtener los usuarios");
        }
        return res.json()
    })
    .then((data)=> data.slice(0, 5))
    .cath((error)=> console.error(error));
}

function obtenerPost(){
    return fetch(`${API}/posts?`)
    .then((res)=>{
        if (!res.ok){
            throw new Error("Error al obtener los usuarios");
        }
        return res.json()
    })
    .then((data)=> data.slice(0, 5))
    .cath((error)=> console.error(error));
}





