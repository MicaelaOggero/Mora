function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    console.log(memoria);
    if(!memoria){
         const nuevoProducto=getNuevoProductoParaMemoria(producto);
         localStorage.setItem("productos", JSON.stringify([nuevoProducto]));
    }else{
        const indiceProducto = memoria.findIndex(conjunto => conjunto.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria=memoria;
        if(indiceProducto===-1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
        }
    
        localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
    }
    actualizNumeroCarrito();
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const indiceProducto = memoria.findIndex(conjunto => conjunto.id === producto.id);
    if(memoria[indiceProducto].cantidad ===1){
        memoria.splice(indiceProducto, 1);
        localStorage.setItem("productos", JSON.stringify(memoria));
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("productos",JSON.stringify(memoria));
}

/** Toma un producto, le agrga cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto =producto;
    nuevoProducto.cantidad=1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizNumeroCarrito(){
    const memoria=JSON.parse(localStorage.getItem("productos"));
    const cuenta = memoria.reduce((acum, current)=> acum+current.cantidad, 0);
    cuentaCarritoElement.innerText=cuenta;
}

actualizNumeroCarrito();