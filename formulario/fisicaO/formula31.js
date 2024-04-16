const cVAF = document.getElementById("cVAF");
const PeriodoVAF= document.getElementById("PeriodoVAF");
const resultadoVAF = document.getElementById("resultadoVAF");

cVAF.addEventListener("click", function(){ 
    const PeriodoVAF1 = parseFloat(PeriodoVAF.value); 
    const FrecuenciaAngularVAF1 = 2 * Math.PI / PeriodoVAF1;
    resultadoVAF.value = FrecuenciaAngularVAF1.toFixed(8) + " rad/s"; 
}); 

