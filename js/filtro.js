const d= document;

// function filtroBusqueda(input, selector){
//     d.addEventListener("keyup", (e)=>{
        
//         if(e.target.matches(input)){
//             console.log(e.target.value);

//             console.log(selector);

//             if(e.key==="Escape") e.target.value="";

//             d.querySelectorAll(selector).forEach((elemento) => elemento.textContent.toLowerCase().includes(e.target.value) ? elemento.classList.remove("filter") : elemento.classList.add("filter")
//             );
//         }
//     });
// }

const input =document.getElementById("filtro");
const resultado=document.getElementById("productos-conteiner");

const handleSearch=()=>{
    const searchIterm=input.ariaValueMax.toLocaleLowerCase();
    const filtroConjunto=listaProductos.nombre;
    console.log(filtroConjunto);
};