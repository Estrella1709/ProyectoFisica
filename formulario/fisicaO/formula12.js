const cDO = document.getElementById("cDO");
const AnguloDifraccionDO = document.getElementById("AnguloDifraccionDO");
const DistanciaAperturasDO = document.getElementById("DistanciaAperturasDO");
const LongitudOndaDO = document.getElementById("LongitudOndaDO");
const resultadoDO = document.getElementById("resultadoDO");

cDO.addEventListener("click", function(){ 
    const AnguloDifraccionDO1 = parseFloat(AnguloDifraccionDO.value); 
    const DistanciaAperturasDO1 = parseFloat(DistanciaAperturasDO.value); 
    const LongitudOndaDO1 = parseFloat(LongitudOndaDO.value); 
    const OrdenMaximoDO = Math.sin(AnguloDifraccionDO1) * (DistanciaAperturasDO1 / LongitudOndaDO1);
    resultadoDO.value = OrdenMaximoDO.toFixed(2); 
});
