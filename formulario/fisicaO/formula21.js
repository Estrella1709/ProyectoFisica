const cAB = document.getElementById("cAB");
const AnguloBrewster = document.getElementById("AnguloBrewster");
const IndiceRefraccion2AB = document.getElementById("IndiceRefraccion2AB");
const resultadoAB = document.getElementById("resultadoAB");

cAB.addEventListener("click", function(){ 
    const AnguloBrewster1 = parseFloat(AnguloBrewster.value); 
    const IndiceRefraccion2AB1 = parseFloat(IndiceRefraccion2AB.value); 
    const IndiceRefraccion1AB = IndiceRefraccion2AB1 / Math.tan(AnguloBrewster1);
    resultadoAB.value = IndiceRefraccion1AB.toFixed(8) + " (adimensional)"; 
}); 
