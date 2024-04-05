
const resultado = document.querySelector('#result-container');
const cantidad = document.querySelector("#amount");
const Dolar = document.querySelector('#from .usd');
const Euro = document.querySelector('#from.eur');
const Libra = document.querySelector('#from.gbp');
const Dolar2 = document.querySelector('#to.usd');
const Euro2 = document.querySelector('#to.euro');
const Libra2 = document.querySelector('#to.gbp');
const convertir = document.querySelector('#conver-btn');

   
    convertir.addEventListener("click",()=>{
convercion();
    })
    function convercion(){
        if (Dolar){
            if(Euro2){
            resultado = (cantidad.value * 0.92)
            alert (resultado)
                      }
            else if (Libra2)
            {
                resultado = (cantidad.value * 0.92);
                alert(resultado);
            }
            else {
                alert("No se convirtio la moneda")
            }
        }
        else if(Euro){
            if(Dolar2){
                resultado = (cantidad.value * 1.08)
                alert (resultado);
            }
            else if (Libra2){
                resultado = (cantidad.value * 0.86)
                alert (resultado);
            }
            else {
                alert ("No se convirtio la moneda")
            }
        }

        else {
            if (Dolar2){
                resultado = (cantidad * 1.26);
                alert (resultado);
            }
            else if (Euro2){
                resultado = (cantidad * 1.17);

            }

            else {
                alert ("No se convirtio la moneda")
            }
        }
    }     
