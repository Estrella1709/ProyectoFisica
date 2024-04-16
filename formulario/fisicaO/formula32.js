const cVAF1 = document.getElementById("cVAF1");
const PeriodoVAF1= document.getElementById("PeriodoVAF1");
const resultadoVAF1 = document.getElementById("resultadoVAF1");

cVAF1.addEventListener("click", function(){ 
    const PeriodoVAF11 = parseFloat(PeriodoVAF1.value); 
    const FrecuenciaVAF11 = 1 / PeriodoVAF11;
    resultadoVAF1.value = FrecuenciaVAF11.toFixed(8) + " Hz"; 
}); 
