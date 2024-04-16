
    const ccr = document.getElementById("ccr1");
    const TonooAA = document.getElementById("TonooAA");
    const velocidadda = document.getElementById("velocidadda");
    const Longitudda = document.getElementById("Longitudda");
    const resultado14 = document.getElementById("resultado14");

    ccr.addEventListener("click", function(){ 
        const TonooAA1 = parseFloat(TonooAA.value); 
        const velocidadda1 = parseFloat(velocidadda.value); 
        const Longitudda1 = parseFloat(Longitudda.value); 
        const Fn1 = (TonooAA1*velocidadda1)/(2*Longitudda1);
        resultado14.value = Fn1.toFixed(2) + 'rad/m'; 
    });
