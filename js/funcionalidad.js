//Inicio sesión y Crear cuenta
var btnAbrirInicio = document.getElementById('btn-abrir-inicio'),
overlay = document.getElementById('overlay'), 
popup=document.getElementById('popup'),
btnCerrarInicio=document.getElementById('btn-cerrar-inicio');
var btnAbrirCrearCuenta = document.getElementById('btn-abrir-crearCuenta'),
overlayC = document.getElementById('overlay-c'), 
popupC=document.getElementById('popup-c'),
btnCerrarCrearCuenta=document.getElementById('btn-cerrar-crearCuenta');

btnAbrirInicio.addEventListener('click', function(){
    overlay.classList.add('active-i');
});

btnCerrarInicio.addEventListener('click', function(){
    overlay.classList.remove('active-i');
});

btnAbrirCrearCuenta.addEventListener('click', function(){
    overlayC.classList.add('active-c');
});

btnCerrarCrearCuenta.addEventListener('click', function(){
    overlayC.classList.remove('active-c');
});

//Efecto header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
});


//Carrito de compras
document.getElementById('toggleCartBtn').addEventListener('click', function() {
    var cartPanel = document.getElementById('cartPanel');
    cartPanel.style.right = (cartPanel.style.right === '-400px') ? '0' : '-400px';
});

document.addEventListener('click', function(event) {
    var cartPanel = document.getElementById('cartPanel');
    var target = event.target;

    // Si el clic no está dentro del panel del carrito ni en el botón de Carrito, cerramos el panel
    if (target !== cartPanel && target !== document.getElementById('toggleCartBtn')) {
        cartPanel.style.right = '-400px';
    }
});

var btnCerrarCarrito=document.getElementById('btn-cerrar-carrito');

btnCerrarCarrito.addEventListener('click', function(){
    cartPanel.style.right = '-400px';
});

const toggleButton = document.getElementById('toggleButton');
const elementoVisible = document.getElementById('toggleCartBtn');

// Agregar un evento de clic al botón
toggleButton.addEventListener('click', function() {
    // Verificar si el elemento es visible
    if (elementoVisible.style.display === 'flex' || elementoVisible.style.display === '') {
        // Si no es visible, hacerlo visible
        elementoVisible.style.display = 'none';
    } else {
        // Si es visible, ocultarlo
        elementoVisible.style.display = 'flex';
    }
});