const cILP = document.getElementById("cILP");
const IntensidadLuzILP = document.getElementById("IntensidadLuzILP");
const AreaILP = document.getElementById("AreaILP");
const resultadoILP = document.getElementById("resultadoILP");

cILP.addEventListener("click", function(){ 
    const IntensidadLuzILP1 = parseFloat(IntensidadLuzILP.value); 
    const AreaILP1 = parseFloat(AreaILP.value); 
    const PotenciaILP = IntensidadLuzILP1 * AreaILP1;
    resultadoILP.value = PotenciaILP.toFixed(8); 
}); 
