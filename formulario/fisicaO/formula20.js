const cAC1 = document.getElementById("cAC1");
const IndiceRefraccion1AC1 = document.getElementById("IndiceRefraccion1AC1");
const IndiceRefraccion2AC1 = document.getElementById("IndiceRefraccion2AC1");
const resultadoAC1 = document.getElementById("resultadoAC1");

cAC1.addEventListener("click", function(){ 
    const IndiceRefraccion1AC11 = parseFloat(IndiceRefraccion1AC1.value); 
    const IndiceRefraccion2AC11 = parseFloat(IndiceRefraccion2AC1.value); 
    const AnguloCriticoAC1 = Math.asin(IndiceRefraccion2AC11 / IndiceRefraccion1AC11);
    resultadoAC1.value = AnguloCriticoAC1.toFixed(8) + " radianes"; 
}); 

