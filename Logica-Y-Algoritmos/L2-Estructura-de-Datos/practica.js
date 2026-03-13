
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
    listaDeCompras.forEach((producto, index) => {
        console.log(index+1, " = ", producto);
    });
    console.log("------------------");
}
mostrarLista();



//???

const eliminarProducto = (listaDeCompras, product) =>{
    return listaDeCompras.filter(n => n !== product);
}

listaDeCompras = eliminarProducto(listaDeCompras, "Arroz");
mostrarLista();
