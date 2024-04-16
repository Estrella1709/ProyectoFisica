const cVF2 = document.getElementById("cVF2");
const IndiceRefraccionVF2 = document.getElementById("IndiceRefraccionVF2");
const VelocidadLuzVF2 = document.getElementById("VelocidadLuzVF2");
const resultadoVF2 = document.getElementById("resultadoVF2");

cVF2.addEventListener("click", function(){ 
    const IndiceRefraccionVF21 = parseFloat(IndiceRefraccionVF2.value); 
    const VelocidadLuzVF21 = parseFloat(VelocidadLuzVF2.value); 
    const VelocidadFase2 = VelocidadLuzVF21 / IndiceRefraccionVF21;
    resultadoVF2.value = VelocidadFase2.toFixed(2) + " m/s"; 
}); 

