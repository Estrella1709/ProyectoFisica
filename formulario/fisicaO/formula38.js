const cDIL = document.getElementById("cDIL");
const DistanciaRendijasDIL = document.getElementById("DistanciaRendijasDIL");
const DistanciaPantallaDIL = document.getElementById("DistanciaPantallaDIL");
const SeparacionMaximosDIL = document.getElementById("SeparacionMaximosDIL");
const resultadoDIL = document.getElementById("resultadoDIL");

cDIL.addEventListener("click", function(){ 
    const DistanciaRendijasDIL1 = parseFloat(DistanciaRendijasDIL.value); 
    const DistanciaPantallaDIL1 = parseFloat(DistanciaPantallaDIL.value); 
    const SeparacionMaximosDIL1 = parseFloat(SeparacionMaximosDIL.value); 
    const LongitudOndaDIL = (SeparacionMaximosDIL1 * DistanciaRendijasDIL1) / DistanciaPantallaDIL1;
    resultadoDIL.value = LongitudOndaDIL.toFixed(2) + " metros"; 
}); 
