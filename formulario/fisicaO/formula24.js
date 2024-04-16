const cATF = document.getElementById("cATF");
const AmplificacionATF = document.getElementById("AmplificacionATF");
const FOcularATF = document.getElementById("FOcularATF");
const resultadoATF = document.getElementById("resultadoATF");

cATF.addEventListener("click", function(){ 
    const AmplificacionATF1 = parseFloat(AmplificacionATF.value); 
    const FOcularATF1 = parseFloat(FOcularATF.value); 
    const FObjetoATF = AmplificacionATF1 * FOcularATF1;
    resultadoATF.value = FObjetoATF.toFixed(8) + " metros"; 
}); 


