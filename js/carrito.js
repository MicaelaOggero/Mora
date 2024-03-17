//------------------------Carrito de compras - funcionalidad segun tamaño ---------------------


if (window.innerWidth <= 700) {
  
    funcionalidadParaPantallasPequenas();
  } else {
    
    funcionalidadParaPantallasGrandes();
  }
  
  // Funcionalidad para pantallas pequeñas
  function funcionalidadParaPantallasPequenas() {
    
    document.getElementById('toggleCartBtn').addEventListener('click', function() {
      var cartPanel = document.getElementById('cartPanel');
      cartPanel.style.right = (cartPanel.style.right === '-300px') ? '0' : '-300px';
    });
    
    document.getElementById('carrito-page').addEventListener('click', function(event) {
      event.stopPropagation(); // Detiene la propagación del evento clic
    });
    
    document.addEventListener('click', function(event) {
      let cartPanel = document.getElementById("cartPanel");
    
      // Verifica si el clic se realizó fuera del panel del carrito, en el botón de alternar el carrito o en un botón "Comprar"
      if (event.target !== document.getElementById('toggleCartBtn') && !event.target.classList.contains('btn-comprar')) {
          cartPanel.style.right = '-300px';
      }
    });
  }
  
  // Funcionalidad para pantallas grandes
  function funcionalidadParaPantallasGrandes() {
    
    document.getElementById('toggleCartBtn').addEventListener('click', function() {
      let cartPanel = document.getElementById('cartPanel');
      cartPanel.style.right = (cartPanel.style.right === '-500px') ? '0' : '-500px';
    });
    
    document.getElementById('carrito-page').addEventListener('click', function(event) {
      event.stopPropagation(); // Detiene la propagación del evento clic
    });
    
    document.addEventListener('click', function(event) {
      let cartPanel = document.getElementById("cartPanel");
    
      // Verifica si el clic se realizó fuera del panel del carrito, en el botón de alternar el carrito o en un botón "Comprar"
      if (event.target !== document.getElementById('toggleCartBtn') && !event.target.classList.contains('btn-comprar')) {
          cartPanel.style.right = '-500px';
      }
    });
  }
  
  const carritoVacioElement = document.getElementById("carrito-vacio");
  const totalesElement = document.getElementById("totales");

  function revisarMensajeVacio(){
    const productosConjunto=JSON.parse(localStorage.getItem("productos"));
    console.log(productosConjunto, productosConjunto == true);
    carritoVacioElement.classList.toggle("escondido", productosConjunto && productosConjunto.length>0);
    totalesElement.classList.toggle("escondido", !(productosConjunto && productosConjunto.length>0));
}


revisarMensajeVacio();