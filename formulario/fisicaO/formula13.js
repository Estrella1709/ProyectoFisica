const cDL = document.getElementById("cDL");
const AnguloDifraccionDL = document.getElementById("AnguloDifraccionDL");
const OrdenMaximoDL = document.getElementById("OrdenMaximoDL");
const DistanciaAperturasDL = document.getElementById("DistanciaAperturasDL");
const resultadoDL = document.getElementById("resultadoDL");

cDL.addEventListener("click", function(){ 
    const AnguloDifraccionDL1 = parseFloat(AnguloDifraccionDL.value); 
    const OrdenMaximoDL1 = parseFloat(OrdenMaximoDL.value); 
    const DistanciaAperturasDL1 = parseFloat(DistanciaAperturasDL.value); 
    const LongitudOndaDL = (OrdenMaximoDL1 * DistanciaAperturasDL1) / Math.sin(AnguloDifraccionDL1);
    resultadoDL.value = LongitudOndaDL.toFixed(2) + " metros"; 
});
