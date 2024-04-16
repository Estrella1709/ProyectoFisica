const cAMI = document.getElementById("cAMI");
const TamañoImagenAMI = document.getElementById("TamañoImagenAMI");
const TamañoObjetoAMI = document.getElementById("TamañoObjetoAMI");
const resultadoAMI = document.getElementById("resultadoAMI");

cAMI.addEventListener("click", function(){ 
    const TamañoImagenAMI1 = parseFloat(TamañoImagenAMI.value); 
    const TamañoObjetoAMI1 = parseFloat(TamañoObjetoAMI.value); 
    const AumentoAMI = - (TamañoImagenAMI1 / TamañoObjetoAMI1);
    resultadoAMI.value = AumentoAMI.toFixed(8); 
}); 
