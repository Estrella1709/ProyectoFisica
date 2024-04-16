const caVA = document.getElementById("caVA");
const FrecuenciaaVA= document.getElementById("FrecuenciaaVA");
const resultadoaVA = document.getElementById("resultadoaVA");

caVA.addEventListener("click", function(){ 
    const FrecuenciaaVA1 = parseFloat(FrecuenciaaVA.value); 
    const PeriodoaVA = 1 / FrecuenciaaVA1;
    resultadoaVA.value = PeriodoaVA.toFixed(8) + " segundos"; 
}); 
