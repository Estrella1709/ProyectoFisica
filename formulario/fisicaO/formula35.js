const cLVL = document.getElementById("cLVL");
const VelocidadLuzLVL = document.getElementById("VelocidadLuzLVL");
const FrecuenciaLVL = document.getElementById("FrecuenciaLVL");
const resultadoLVL = document.getElementById("resultadoLVL");

cLVL.addEventListener("click", function(){ 
    const VelocidadLuzLVL1 = parseFloat(VelocidadLuzLVL.value); 
    const FrecuenciaLVL1 = parseFloat(FrecuenciaLVL.value); 
    const LongitudOndaLVL = VelocidadLuzLVL1 / FrecuenciaLVL1;
    resultadoLVL.value = LongitudOndaLVL.toFixed(8) + " metros"; 
}); 
