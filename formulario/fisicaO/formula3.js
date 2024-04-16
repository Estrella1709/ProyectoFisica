    const cIR = document.getElementById("cIR");
    const IndiceRefraccionI1 = document.getElementById("IndiceRefraccionI1");
    const AnguloIncidenciaI1 = document.getElementById("AnguloIncidenciaI1");
    const AnguloRefraccionI1 = document.getElementById("AnguloRefraccionI1");
    const resultadoIR = document.getElementById("resultadoIR");

    cIR.addEventListener("click", function(){ 
        const IndiceRefraccionI11 = parseFloat(IndiceRefraccionI1.value); 
        const AnguloIncidenciaI11 = parseFloat(AnguloIncidenciaI1.value); 
        const AnguloRefraccionI11 = parseFloat(AnguloRefraccionI1.value); 
        const IndiceRefraccion11 = (IndiceRefraccionI11 * Math.sin(AnguloRefraccionI11)) / Math.sin(AnguloIncidenciaI11);
        resultadoIR.value = IndiceRefraccion11.toFixed(2) + " (adimensional)"; 
    }); 

