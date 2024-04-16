const cAMTO = document.getElementById("cAMTO");
const TamañoImagenAMTO = document.getElementById("TamañoImagenAMTO");
const AumentoAMTO = document.getElementById("AumentoAMTO");
const resultadoAMTO = document.getElementById("resultadoAMTO");

cAMTO.addEventListener("click", function(){ 
    const TamañoImagenAMTO1 = parseFloat(TamañoImagenAMTO.value); 
    const AumentoAMTO1 = parseFloat(AumentoAMTO.value); 
    const TamañoObjetoAMTO1 = - (TamañoImagenAMTO1 / AumentoAMTO1);
    resultadoAMTO.value = TamañoObjetoAMTO1.toFixed(8) + " metros"; 
}); 
