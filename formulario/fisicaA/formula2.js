const calcul = document.getElementById("calcul1");
const velocidadOnda = document.getElementById("velocidadOnda"); 
const longitudOnda = document.getElementById("longitudOnda"); 
const resultado1 = document.getElementById("resultado1");

calcul.addEventListener("click", function(){ 
    const velocidadOnda1 = parseFloat(velocidadOnda.value); 
    const longitudOnda1 = parseFloat(longitudOnda.value); 
    const f = velocidadOnda1 / longitudOnda1; 
    resultado1.value = f.toFixed(2) + 'Hz'; 
});
