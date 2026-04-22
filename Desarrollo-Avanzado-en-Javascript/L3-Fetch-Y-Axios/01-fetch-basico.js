
//Esto es sincrono
console.log("1. Arrancando script...");

//Esto es asincrono
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log("2. Llegó la respuesta. Status:", response.status);
    // response NO es el JSON todavía: es un objeto Response.
    // Hay que convertirlo (también devuelve una Promise).
/*     if (!response.ok){
        throw new Error("Error al obtener los datos");
    }
    if (response.status === 404){
        throw new Error("Usuario no encontrado");
    } */
    return response.json();
  })

  .then((usuario) => {
    console.log("3. Datos del usuario:");
    console.log("   Nombre:", usuario.name);
    console.log("   Email :", usuario.email);
    console.log("   Ciudad:", usuario.address.city);
  }).catch((error) => console.log("Error: ", error));

//Esto es sincrono
console.log("4. Esta línea sale ANTES que los datos. ¿Por qué?");