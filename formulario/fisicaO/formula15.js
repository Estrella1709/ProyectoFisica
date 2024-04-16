const cDF = document.getElementById("cDF");
const DistanciaObjetoDF = document.getElementById("DistanciaObjetoDF");
const DistanciaImagenDF = document.getElementById("DistanciaImagenDF");
const resultadoDF = document.getElementById("resultadoDF");

cDF.addEventListener("click", function(){ 
    const DistanciaObjetoDF1 = parseFloat(DistanciaObjetoDF.value); 
    const DistanciaImagenDF1 = parseFloat(DistanciaImagenDF.value); 
    const DistanciaFocalLD = 1 / ((1 / DistanciaObjetoDF1) + (1 / DistanciaImagenDF1));
    resultadoDF.value = DistanciaFocalLD.toFixed(2) + " metros"; 
}); 

