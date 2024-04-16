const cDA = document.getElementById("cDA");
const AnguloDifraccionDA = document.getElementById("AnguloDifraccionDA");
const OrdenMaximoDA = document.getElementById("OrdenMaximoDA");
const LongitudOndaDA = document.getElementById("LongitudOndaDA");
const resultadoDA = document.getElementById("resultadoDA");

cDA.addEventListener("click", function(){ 
    const AnguloDifraccionDA1 = parseFloat(AnguloDifraccionDA.value); 
    const OrdenMaximoDA1 = parseFloat(OrdenMaximoDA.value); 
    const LongitudOndaDA1 = parseFloat(LongitudOndaDA.value); 
    const DistanciaAperturas = (OrdenMaximoDA1 * LongitudOndaDA1) / Math.sin(AnguloDifraccionDA1);
    resultadoDA.value = DistanciaAperturas.toFixed(2) + " metros"; 
}); 
