const cVF3 = document.getElementById("cVF3");
const LongitudOndaVF = document.getElementById("LongitudOndaVF");
const TiempoVF = document.getElementById("TiempoVF");
const resultadoVF3 = document.getElementById("resultadoVF3");

cVF3.addEventListener("click", function(){ 
    const LongitudOndaVF1 = parseFloat(LongitudOndaVF.value); 
    const TiempoVF1 = parseFloat(TiempoVF.value); 
    const VelocidadFase3 = LongitudOndaVF1 / TiempoVF1;
    resultadoVF3.value = VelocidadFase3.toFixed(2) + " m/s"; 
}); 
