//Actualizar carrito
const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizNumeroCarrito(){
  const memoria=JSON.parse(localStorage.getItem("productos"));
  const cuenta = memoria.reduce((acum, current)=> acum+current.cantidad, 0);
  cuentaCarritoElement.innerText=cuenta;
}

actualizNumeroCarrito();