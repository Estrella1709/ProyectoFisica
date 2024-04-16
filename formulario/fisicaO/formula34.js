const cFVL = document.getElementById("cFVL");
const LongitudOndaFVL = document.getElementById("LongitudOndaFVL");
const FrecuenciaFVL = document.getElementById("FrecuenciaFVL");
const resultadoFVL = document.getElementById("resultadoFVL");

cFVL.addEventListener("click", function(){ 
    const LongitudOndaFVL1 = parseFloat(LongitudOndaFVL.value); 
    const FrecuenciaFVL1 = parseFloat(FrecuenciaFVL.value); 
    const VelocidadLuzFVL = LongitudOndaFVL1 * FrecuenciaFVL1;
    resultadoFVL.value = VelocidadLuzFVL.toFixed(8) + " m/s"; 
}); 
