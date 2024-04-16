const cATO = document.getElementById("cATO");
const FObjetoATO = document.getElementById("FObjetoATO");
const AmplificacionATO = document.getElementById("AmplificacionATO");
const resultadoATO = document.getElementById("resultadoATO");

cATO.addEventListener("click", function(){ 
    const FObjetoATO1 = parseFloat(FObjetoATO.value); 
    const AmplificacionATO1 = parseFloat(AmplificacionATO.value); 
    const FOcularATO = FObjetoATO1 / AmplificacionATO1;
    resultadoATO.value = FOcularATO.toFixed(8) + " metros"; 
}); 
