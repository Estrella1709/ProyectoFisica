const cDIM = document.getElementById("cDIM");
const DistanciaRendijasDIM = document.getElementById("DistanciaRendijasDIM");
const DistanciaPantallaDIM = document.getElementById("DistanciaPantallaDIM");
const LongitudOndaDIM = document.getElementById("LongitudOndaDIM");
const resultadoDIM = document.getElementById("resultadoDIM");

cDIM.addEventListener("click", function(){ 
    const DistanciaRendijasDIM1 = parseFloat(DistanciaRendijasDIM.value); 
    const DistanciaPantallaDIM1 = parseFloat(DistanciaPantallaDIM.value); 
    const LongitudOndaDIM1 = parseFloat(LongitudOndaDIM.value); 
    const SeparacionMaximosDIM = (LongitudOndaDIM1 * DistanciaPantallaDIM1) / DistanciaRendijasDIM1;
    resultadoDIM.value = SeparacionMaximosDIM.toFixed(2) + " metros"; 
}); 
