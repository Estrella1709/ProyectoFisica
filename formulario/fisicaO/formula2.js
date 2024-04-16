    const cAIR = document.getElementById("cAIR");
    const IndiceRefraccion1R = document.getElementById("IndiceRefraccion1R");
    const IndiceRefraccion2R = document.getElementById("IndiceRefraccion2R");
    const AnguloIncidenciaR = document.getElementById("AnguloIncidenciaR");
    const resultadoAR = document.getElementById("resultadoAR");

    cAIR.addEventListener("click", function(){ 
        const IndiceRefraccion1R1 = parseFloat(IndiceRefraccion1R.value); 
        const IndiceRefraccion2R1 = parseFloat(IndiceRefraccion2R.value); 
        const AnguloIncidenciaR1 = parseFloat(AnguloIncidenciaR.value); 
        const AnguloRefraccionR = Math.asin((IndiceRefraccion1R1 * Math.sin(AnguloIncidenciaR1)) / IndiceRefraccion2R1);
        resultadoAR.value = AnguloRefraccionR.toFixed(2) + " radianes" ; 
    }); 

