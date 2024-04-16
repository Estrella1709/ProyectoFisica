const cAD = document.getElementById("cAD");
const OrdenMaximoAD = document.getElementById("OrdenMaximoAD");
const DistanciaAperturasAD = document.getElementById("DistanciaAperturasAD");
const LongitudOndaAD = document.getElementById("LongitudOndaAD");
const resultadoAD = document.getElementById("resultadoAD");

cAD.addEventListener("click", function(){ 
    const OrdenMaximoAD1 = parseFloat(OrdenMaximoAD.value); 
    const DistanciaAperturasAD1 = parseFloat(DistanciaAperturasAD.value); 
    const LongitudOndaAD1 = parseFloat(LongitudOndaAD.value); 
    const AnguloDifraccionAD1 = Math.asin((OrdenMaximoAD1 * LongitudOndaAD1) / DistanciaAperturasAD1);
    resultadoAD.value = AnguloDifraccionAD1 + " radianes"; 
});
