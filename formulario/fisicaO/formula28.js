const cAMT = document.getElementById("cAMT");
const TamañoObjetoAMT = document.getElementById("TamañoObjetoAMT");
const AumentoAMT = document.getElementById("AumentoAMT");
const resultadoAMT = document.getElementById("resultadoAMT");

cAMT.addEventListener("click", function(){ 
    const TamañoObjetoAMT1 = parseFloat(TamañoObjetoAMT.value); 
    const AumentoAMT1 = parseFloat(AumentoAMT.value); 
    const TamañoImagenAMT = - (AumentoAMT1 * TamañoObjetoAMT1);
    resultadoAMT.value = TamañoImagenAMT.toFixed(8) + " metros"; 
}); 

