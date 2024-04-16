const cVF = document.getElementById("cVF");
const VelocidadLuzVF = document.getElementById("VelocidadLuzVF");
const IndiceRefraccionVF = document.getElementById("IndiceRefraccionVF");
const resultadoVF = document.getElementById("resultadoVF");

cVF.addEventListener("click", function(){ 
    const VelocidadLuzVF1 = parseFloat(VelocidadLuzVF.value); 
    const IndiceRefraccionVF1 = parseFloat(IndiceRefraccionVF.value); 
    const VelocidadFase = VelocidadLuzVF1 / IndiceRefraccionVF1;
    resultadoVF.value = VelocidadFase.toFixed(2) + " m/s"; 
}); 

