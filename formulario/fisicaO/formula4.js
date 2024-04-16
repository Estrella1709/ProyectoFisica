    const cSM = document.getElementById("cSM");
    const IndiceRefraccionSM = document.getElementById("IndiceRefraccionSM");
    const AnguloIncidenciaSM = document.getElementById("AnguloIncidenciaSM");
    const AnguloRefraccionSM = document.getElementById("AnguloRefraccionSM");
    const resultadoSM = document.getElementById("resultadoSM");

    cSM.addEventListener("click", function(){ 
        const IndiceRefraccionSM1 = parseFloat(IndiceRefraccionSM.value); 
        const AnguloIncidenciaSM1 = parseFloat(AnguloIncidenciaSM.value); 
        const AnguloRefraccionSM1 = parseFloat(AnguloRefraccionSM.value); 
        const IndiceRefraccionSM2 = (IndiceRefraccionSM1 * Math.sin(AnguloIncidenciaSM1)) / Math.sin(AnguloRefraccionSM1);
        resultadoSM.value = IndiceRefraccionSM2.toFixed(2) + " (adimensional)"; 
    }); 

        