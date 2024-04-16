const cDLO = document.getElementById("cDLO");
const DistanciaFocalDLO = document.getElementById("DistanciaFocalDLO");
const DistanciaImagenDLO = document.getElementById("DistanciaImagenDLO");
const resultadoDLO = document.getElementById("resultadoDLO");

cDLO.addEventListener("click", function(){ 
    const DistanciaFocalDLO1 = parseFloat(DistanciaFocalDLO.value); 
    const DistanciaImagenDLO1 = parseFloat(DistanciaImagenDLO.value); 
    const DistanciaObjetoDLO = 1 / ((1 / DistanciaFocalDLO1) - (1 / DistanciaImagenDLO1));
    resultadoDLO.value = DistanciaObjetoDLO.toFixed(2) + " metros"; 
}); 

