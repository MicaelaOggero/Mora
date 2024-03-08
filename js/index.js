const contenedorTarjetas = document.getElementById("productos-conteiner");

function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto=document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        contenedorTarjetas.appendChild(nuevoProducto);
    });
}

crearTarjetaProductosInicio(listaProductos);