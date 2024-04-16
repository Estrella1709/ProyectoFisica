const cILA = document.getElementById("cILA");
const IntensidadLuzILA = document.getElementById("IntensidadLuzILA");
const PotenciaILA = document.getElementById("PotenciaILA");
const resultadoILA = document.getElementById("resultadoILA");

cILA.addEventListener("click", function(){ 
    const IntensidadLuzILA1 = parseFloat(IntensidadLuzILA.value); 
    const PotenciaILA1 = parseFloat(PotenciaILA.value); 
    const AreaILA1 = PotenciaILA1 / IntensidadLuzILA1;
    resultadoILA.value = AreaILA1.toFixed(8); 
}); 
