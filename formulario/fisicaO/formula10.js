const cVLM = document.getElementById("cVLM");
const IndiceRefraccionVLM = document.getElementById("IndiceRefraccionVLM");
const VelocidadFaseVLM = document.getElementById("VelocidadFaseVLM");
const resultadoVLM = document.getElementById("resultadoVLM");

cVLM.addEventListener("click", function(){ 
    const IndiceRefraccionVLM1 = parseFloat(IndiceRefraccionVLM.value); 
    const VelocidadFaseVLM1 = parseFloat(VelocidadFaseVLM.value); 
    const VelocidadLuzVLM = VelocidadFaseVLM1 * IndiceRefraccionVLM1;
    resultadoVLM.value = VelocidadLuzVLM.toFixed(2) + " m/s"; 
}); 


