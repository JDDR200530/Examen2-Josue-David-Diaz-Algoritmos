
 let publicaciones = [];
 const nombreUsuario = ["Usuario123"];
 function AgregarPublicacion(){
        const Nuevapublicaion = prompt("Ingrese su Publicacion");
        if(Nuevapublicaion != null && Nuevapublicaion.trim() != ''){
        const publicacionNombre = `${nombreUsuario}: ${Nuevapublicaion}`
         publicaciones.push(publicacionNombre);
        mostrarPublicacion();
        GuardarPublicacionenLocalStorage();
        }
        else{
            alert("No se escribio nada en la publicacion");
        }
 }
  const ContenedorPublicacion = document.getElementById('ContenedorPublicaciones');
 function mostrarPublicacion(){
    ContenedorPublicacion.innerHTML = "";
    publicaciones.forEach((publicacion)=>{
    const ElementoPublicacion = document.createElement("div");
    ElementoPublicacion.classList.add("publicacion");

  

    const textoPublicacion = document.createElement("span");
    textoPublicacion.textContent = publicacion;
    ElementoPublicacion.appendChild(textoPublicacion);
    ContenedorPublicacion.appendChild(ElementoPublicacion);
 });
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

const contenedor =document.querySelector('.like-count')
    const megusta = document.querySelector('.like-btn');
    megusta.addEventListener("click",() => {
        let likes = parseInt(contenedor.textContent);
        likes++;
        contenedor.textContent = likes;
    })
   
const Nomegusta = document.querySelector('.dontlike-btn');
Nomegusta.addEventListener("click",()=>{
   let likes = parseInt(contenedor.textContent);
   likes --;
   contenedor.textContent = likes;
}) 

