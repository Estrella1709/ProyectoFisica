    const cAI = document.getElementById("cAI");
    const IndiceRefraccion1 = document.getElementById("IndiceRefraccion1");
    const IndiceRefraccion2 = document.getElementById("IndiceRefraccion2");
    const AnguloRefraccion = document.getElementById("AnguloRefraccion");
    const resultadoAI = document.getElementById("resultadoAI");

    cAI.addEventListener("click", function(){ 
        const IndiceRefraccion11 = parseFloat(IndiceRefraccion1.value); 
        const IndiceRefraccion21 = parseFloat(IndiceRefraccion2.value); 
        const AnguloRefraccion1 = parseFloat(AnguloRefraccion.value); 
        const AnguloIncidencia = Math.asin((IndiceRefraccion21 * Math.sin(AnguloRefraccion1)) / IndiceRefraccion11);
        resultadoAI.value = AnguloIncidencia.toFixed(2) + " radianes"; 
    }); 

        