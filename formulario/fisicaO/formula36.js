const cDIR = document.getElementById("cDIR");
const LongitudOndaDIR = document.getElementById("LongitudOndaDIR");
const DistanciaPantallaDIR = document.getElementById("DistanciaPantallaDIR");
const SeparacionMaximosDIR = document.getElementById("SeparacionMaximosDIR");
const resultadoDIR = document.getElementById("resultadoDIR");

cDIR.addEventListener("click", function(){ 
    const LongitudOndaDIR1 = parseFloat(LongitudOndaDIR.value); 
    const DistanciaPantallaDIR1 = parseFloat(DistanciaPantallaDIR.value); 
    const SeparacionMaximosDIR1 = parseFloat(SeparacionMaximosDIR.value); 
    const DistanciaRendijas = (LongitudOndaDIR1 * DistanciaPantallaDIR1) / SeparacionMaximosDIR1;
    resultadoDIR.value = DistanciaRendijas.toFixed(2) + " metros"; 
}); 
