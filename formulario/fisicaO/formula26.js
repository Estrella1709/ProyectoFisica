const cAT = document.getElementById("cAT");
const FObjetoAT = document.getElementById("FObjetoAT");
const FOcularAT = document.getElementById("FOcularAT");
const resultadoAT = document.getElementById("resultadoAT");

cAT.addEventListener("click", function(){ 
    const FObjetoAT1 = parseFloat(FObjetoAT.value); 
    const FOcularAT1 = parseFloat(FOcularAT.value); 
    const AmplificacionAT = FObjetoAT1 / FOcularAT1;
    resultadoAT.value = AmplificacionAT.toFixed(8) + " (adimensional)"; 
}); 
