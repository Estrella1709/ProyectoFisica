const cFA = document.getElementById("cFA");
const VelocidadLuzFA = document.getElementById("VelocidadLuzFA");
const LongitudOndaFA = document.getElementById("LongitudOndaFA");
const resultadoFA = document.getElementById("resultadoFA");

cFA.addEventListener("click", function(){ 
    const VelocidadLuzFA1 = parseFloat(VelocidadLuzFA.value); 
    const LongitudOndaFA1 = parseFloat(LongitudOndaFA.value); 
    const FrecuenciaFA = VelocidadLuzFA1 / LongitudOndaFA1;
    resultadoFA.value = FrecuenciaFA.toFixed(8) + " Hz"; 
}); 
