const cAB2 = document.getElementById("cAB2");
const AnguloBrewster2 = document.getElementById("AnguloBrewster2");
const IndiceRefraccion1AB2 = document.getElementById("IndiceRefraccion1AB2");
const resultadoAB2 = document.getElementById("resultadoAB2");

cAB2.addEventListener("click", function(){ 
    const AnguloBrewster21 = parseFloat(AnguloBrewster2.value); 
    const IndiceRefraccion1AB21 = parseFloat(IndiceRefraccion1AB2.value); 
    const IndiceRefraccion21 = IndiceRefraccion1AB21 * Math.tan(AnguloBrewster21);
    resultadoAB2.value = IndiceRefraccion21.toFixed(8) + " (adimensional)"; 
}); 
