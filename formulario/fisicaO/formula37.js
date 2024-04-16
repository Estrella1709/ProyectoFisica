const cDRP = document.getElementById("cDRP");
const LongitudOndaDRP = document.getElementById("LongitudOndaDRP");
const DistanciaRendijasDRP = document.getElementById("DistanciaRendijasDRP");
const SeparacionMaximosDRP = document.getElementById("SeparacionMaximosDRP");
const resultadoDRP = document.getElementById("resultadoDRP");

cDRP.addEventListener("click", function(){ 
    const LongitudOndaDRP1 = parseFloat(LongitudOndaDRP.value); 
    const DistanciaRendijasDRP1 = parseFloat(DistanciaRendijasDRP.value); 
    const SeparacionMaximosDRP1 = parseFloat(SeparacionMaximosDRP.value); 
    const DistanciaPantallaDRP = (SeparacionMaximosDRP1 * DistanciaRendijasDRP1) / LongitudOndaDRP1;
    resultadoDRP.value = DistanciaPantallaDRP.toFixed(2) + " metros"; 
}); 
