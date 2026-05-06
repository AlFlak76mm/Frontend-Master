
const fs = require ("fs");

const apiPokemon = "https://pokeapi.co/api/v2/";


/* function encontrarDatos(Pokemon){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{


        }, 2000);
    })
} */

async function obtenerDatosPokemon(pokemon){
    try{
        let pokemonBase = await fetch(`${apiPokemon}pokemon/${pokemon}`);
        let datos = await pokemonBase.json();

        let especie = await fetch (`${apiPokemon}pokemon-species/${pokemon}`);
        let felicidadyCaptura = await especie.json();

        console.log(`----- Informacion de ${pokemon} -----`);
        console.log(`Su ID es ${datos.id} y mide ${datos.height} manzanas \n Tiene ${felicidadyCaptura.base_happiness} de felicidad y ${felicidadyCaptura.capture_rate} de posibilidad de captura base \n`);
    }
    catch (error){
        console.log('Error al obtener los datos:', error);
    }
}

obtenerDatosPokemon("ditto");

obtenerDatosPokemon("pikachu");

obtenerDatosPokemon("gardevoir");

obtenerDatosPokemon("error aca bien aftercatabath");

