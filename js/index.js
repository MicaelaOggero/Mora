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
                  <button class="btn btn-primary mt-1 btn-comprar">Comprar</button>
                </div>
            </div>`
        contenedorTarjetas.appendChild(nuevoConjunto);
        nuevoConjunto.getElementsByTagName("button")[0].addEventListener("click", ()=>agregarAlCarrito(producto))
    });
    
}

crearTarjetaProductosInicio(listaProductos);

//Carrito de compras
document.getElementById('toggleCartBtn').addEventListener('click', function() {
  var cartPanel = document.getElementById('cartPanel');
  cartPanel.style.right = (cartPanel.style.right === '-500px') ? '0' : '-500px';
});

document.getElementById('carrito-page').addEventListener('click', function(event) {
  event.stopPropagation(); // Detiene la propagación del evento clic
});

document.addEventListener('click', function(event) {
  var cartPanel = document.getElementById("cartPanel");

  // Verifica si el clic se realizó fuera del panel del carrito, en el botón de alternar el carrito o en un botón "Comprar"
  if (event.target !== document.getElementById('toggleCartBtn') && !event.target.classList.contains('btn-comprar')) {
      cartPanel.style.right = '-500px';
  }
});

var btnCerrarCarrito=document.getElementById('btn-cerrar-carrito');

btnCerrarCarrito.addEventListener('click', function(){
  cartPanel.style.right = '-500px';
});