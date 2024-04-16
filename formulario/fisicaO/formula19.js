const cACI2 = document.getElementById("cACI2");
const AnguloCriticoACI2 = document.getElementById("AnguloCriticoACI2");
const IndiceRefraccion1ACI2 = document.getElementById("IndiceRefraccion1ACI2");
const resultadoACI2 = document.getElementById("resultadoACI2");

cACI2.addEventListener("click", function(){ 
    const AnguloCriticoACI21 = parseFloat(AnguloCriticoACI2.value); 
    const IndiceRefraccion1ACI21 = parseFloat(IndiceRefraccion1ACI2.value); 
    const IndiceRefraccion2ACI2 = Math.sin(AnguloCriticoACI21) / IndiceRefraccion1ACI21;
    resultadoACI2.value = IndiceRefraccion2ACI2.toFixed(8); 
}); 
