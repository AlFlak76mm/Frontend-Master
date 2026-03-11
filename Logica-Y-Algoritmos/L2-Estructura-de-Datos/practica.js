
let listaDeCompras = [];

const agregarProducto = (product) =>{
    listaDeCompras.push(product);
    return product;
};


agregarProducto("Arroz");
agregarProducto("Aguacate");


const mostrarLista = () =>{
    if (listaDeCompras.length === 0 ){
        console.log("No hay elementos en la lista");
        return;
    };
    listaDeCompras.forEach((producto) => {
        console.log(producto);
    });
}
mostrarLista();



//???

const eliminarProducto = (listaDeCompras, product) =>{
    return listaDeCompras.filter(product => product !== product);
}
eliminarProducto(listaDeCompras, "Arroz");


let eliminar = listaDeCompras.filter(n => n !== "Arroz");


console.log(eliminar);