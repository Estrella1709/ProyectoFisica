const cDLI = document.getElementById("cDLI");
const DistanciaFocalDLI = document.getElementById("DistanciaFocalDLI");
const DistanciaObjetoDLI = document.getElementById("DistanciaObjetoDLI");
const resultadoDLI = document.getElementById("resultadoDLI");

cDLI.addEventListener("click", function(){ 
    const DistanciaFocalDLI1 = parseFloat(DistanciaFocalDLI.value); 
    const DistanciaObjetoDLI1 = parseFloat(DistanciaObjetoDLI.value); 
    const DistanciaImagenDLI = 1 / ((1 / DistanciaFocalDLI1) - (1 / DistanciaObjetoDLI1));
    resultadoDLI.value = DistanciaImagenDLI.toFixed(2) + " metros"; 
}); 

