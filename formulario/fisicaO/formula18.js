const cACI = document.getElementById("cACI");
const AnguloCriticoACI = document.getElementById("AnguloCriticoACI");
const IndiceRefraccion2ACI = document.getElementById("IndiceRefraccion2ACI");
const resultadoACI = document.getElementById("resultadoACI");

cACI.addEventListener("click", function(){ 
    const AnguloCriticoACI1 = parseFloat(AnguloCriticoACI.value); 
    const IndiceRefraccion2ACI1 = parseFloat(IndiceRefraccion2ACI.value); 
    const IndiceRefraccion1ACI1 = Math.sin(AnguloCriticoACI1) / IndiceRefraccion2ACI1;
    resultadoACI.value = IndiceRefraccion1ACI1.toFixed(8); 
}); 

