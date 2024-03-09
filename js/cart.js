const contenedorTarjetas = document.getElementById("productos-conteiner");

function crearTarjetaProductosInicio(){
    contenedorTarjetas.innerHTML="";
    const productos=JSON.parse(localStorage.getItem("productos"));
    console.log(productos);
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            const nuevoConjunto=document.createElement("div");
            nuevoConjunto.classList = "tarjeta-producto";
            nuevoConjunto.innerHTML = `<div class="producto">
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="content-detalle">
                    <div class="card-body">
                        <div class="sub-detalle">
                            <h5 class="card-title ">${producto.nombre}</h5>
                            <div class=" precio">$${producto.precio}</div>
                        </div>
                        <div class="codigo-content">
                            <label class="mt-2">Código:</label>
                            <div class="codigo mt-2">${producto.codigo}</div>
                        </div>
                        
                    </div>
                    <div class="botones">
                        <button class="btn btn-primary mt-1">-</button>
                            <div class="cantidad-elementos">0</div>
                        <button class="btn btn-primary mt-1">+</button>
                    </div>
                    
                </div>
            </div>`
            contenedorTarjetas.appendChild(nuevoConjunto);
            nuevoConjunto.getElementsByTagName("button")[1].addEventListener("click", ()=>agregarAlCarrito(producto));
            nuevoConjunto.getElementsByTagName("button")[0].addEventListener("click", ()=>{restarAlCarrito(producto)
            crearTarjetaProductosInicio();
            });
        });
    }
    
}

crearTarjetaProductosInicio();