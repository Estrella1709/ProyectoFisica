const cLO = document.getElementById("cLO");
const VelocidadFaseLO = document.getElementById("VelocidadFaseLO");
const TiempoLO = document.getElementById("TiempoLO");
const resultadoLO = document.getElementById("resultadoLO");

cLO.addEventListener("click", function(){ 
    const VelocidadFaseLO1 = parseFloat(VelocidadFaseLO.value); 
    const TiempoLO1 = parseFloat(TiempoLO.value); 
    const LongitudOndaLO = VelocidadFaseLO1 * TiempoLO1;
    resultadoLO.value = LongitudOndaLO.toFixed(2) + " metros"; 
}); 

