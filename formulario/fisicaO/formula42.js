const cIL = document.getElementById("cIL");
const PotenciaIL = document.getElementById("PotenciaIL");
const AreaIL = document.getElementById("AreaIL");
const resultadoIL = document.getElementById("resultadoIL");

cIL.addEventListener("click", function(){ 
    const PotenciaIL1 = parseFloat(PotenciaIL.value); 
    const AreaIL1 = parseFloat(AreaIL.value); 
    const IntensidadLuzIL = PotenciaIL1 / AreaIL1;
    resultadoIL.value = IntensidadLuzIL.toFixed(8); 
}); 
