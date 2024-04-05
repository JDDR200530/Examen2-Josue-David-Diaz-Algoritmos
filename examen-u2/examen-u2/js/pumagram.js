 const comentario = document.querySelectorAll('.add-comment .comment-input');
 let publicaciones = [];
 function AgregarPublicacion(){
        const Nuevapublicaion = prompt("Ingrese su Publicacion");
        if(Nuevapublicaion != null && Nuevapublicaion.trim() != ''){
        publicaciones.push(Nuevapublicaion);
        mostrarPublicacion();
        GuardarPublicacionenLocalStorage();
        }
        else{
            alert("No se escribio nada en la publicacion");
        }
 }
  const ContenedorPublicacion = document.getElementById('ContenedorPublicaciones');
 function mostrarPublicacion(){
    ContenedorPublicacion.innerHtml = "";
    publicaciones.forEach((publicacion)=>{
    const ElementoPublicacion = document.querySelector("div");
    ElementoPublicacion.classList.add("publicacion");

    const textoPublicacion = document.createElement("span");
    textoPublicacion.textContent = publicacion;
    textoPublicacion.textContent ="publicacion";})
 }

 function GuardarPublicacionenLocalStorage (){
    const ElementoPublicacionJSON = JSON.stringify(publicaciones);
    localStorage.setItem("ContenedorPublicaciones",ElementoPublicacionJSON)
 }
function CargarPublicacionesNotas(){
   const ElementoPublicacionJSON = localStorage.getItem("ContenedorPublicaciones");
   if (ElementoPublicacionJSON){
    publicaciones = JSON.parse(ElementoPublicacionJSON)
    mostrarPublicacion();
   }
}
   window.addEventListener("load",CargarPublicacionesNotas);

const contenedor =document.querySelector('."like-count"')
    const megusta = document.querySelector('.like-btn');
    megusta.addEventListener("click",() => {
        contenedor + 1;
    })


