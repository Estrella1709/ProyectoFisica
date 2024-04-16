const cVL = document.getElementById("cVL");
const VelocidadFaseVL = document.getElementById("VelocidadFaseVL");
const IndiceRefraccionVL = document.getElementById("IndiceRefraccionVL");
const resultadoVL = document.getElementById("resultadoVL");

cVL.addEventListener("click", function(){ 
    const VelocidadFaseVL1 = parseFloat(VelocidadFaseVL.value); 
    const IndiceRefraccionVL1 = parseFloat(IndiceRefraccionVL.value); 
    const VelocidadLuzVL1 = VelocidadFaseVL1 * IndiceRefraccionVL1;
    resultadoVL.value = VelocidadLuzVL1.toFixed(2) + " m/s"; 
}); 
