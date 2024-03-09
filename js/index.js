const contenedorTarjetas = document.getElementById("productos-conteiner");

function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoConjunto=document.createElement("div");
        nuevoConjunto.classList = "tarjeta-producto";
        nuevoConjunto.innerHTML = `
        <div class="producto" style="width: 18rem;">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title mt-3">${producto.nombre}</h5>
                  <div class="mt-2 precio">$${producto.precio}</div>
                  <div class="codigo-content">
                    <label class="mt-2">Código:</label>
                    <div class="codigo mt-2">${producto.codigo}</div>
                  </div>
                  <button class="btn btn-primary mt-1">Comprar</button>
                </div>
            </div>`
        contenedorTarjetas.appendChild(nuevoConjunto);
        nuevoConjunto.getElementsByTagName("button")[0].addEventListener("click", ()=>agregarAlCarrito(producto))
    });
}

crearTarjetaProductosInicio(listaProductos);

//localStorage.clear();