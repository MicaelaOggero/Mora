const searchInputCart =document.getElementById("filtro-cart");
const resultadoCart=document.getElementById("productos-carrito");

const productosOriginales = JSON.parse(localStorage.getItem("productos"));
// Agregar un evento input al campo de búsqueda para detectar cuando se ingresan caracteres
searchInputCart.addEventListener("input", () => {
    // Verificar si el campo de búsqueda está vacío y aún tiene el foco
    if (searchInputCart.value.trim() === "" && document.activeElement === searchInputCart) {
        // Recuperar los productos originales del localStorage
        localStorage.setItem("productos", JSON.stringify(productosOriginales));
    }else{
        searchInputCart.addEventListener("input", handleSearchCart);
    }
});

// Función para manejar la búsqueda y filtrado de productos
const handleSearchCart = () => {
    contenedorTarjetasCart.innerHTML = "";
    const searchIterm = searchInputCart.value.toLowerCase();
    console.log(searchIterm);
    
    // Filtrar productos según el término de búsqueda
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const filtroConjunto = memoria.filter((conjunto) => conjunto.nombre.toLowerCase().startsWith(searchIterm));
    localStorage.setItem("productos", JSON.stringify(filtroConjunto));
    
    resultadoCart.innerHTML = "";
    

    crearTarjetaProductosInicio();
};


searchInputCart.addEventListener("input", handleSearchCart);