const cABO = document.getElementById("cABO");
const IndiceRefraccion1ABO = document.getElementById("IndiceRefraccion1ABO");
const IndiceRefraccion2ABO = document.getElementById("IndiceRefraccion2ABO");
const resultadoABO = document.getElementById("resultadoABO");

cABO.addEventListener("click", function(){ 
    const IndiceRefraccion1ABO1 = parseFloat(IndiceRefraccion1ABO.value); 
    const IndiceRefraccion2ABO1 = parseFloat(IndiceRefraccion2ABO.value); 
    const AnguloBrewsterABO = Math.atan(IndiceRefraccion2ABO1 / IndiceRefraccion1ABO1);
    resultadoABO.value = AnguloBrewsterABO.toFixed(8) + " radianes"; 
}); 

