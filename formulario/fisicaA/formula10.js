    
    const c = document.getElementById("c1");
    const EnergiaA = document.getElementById("EnergiaA");
    const IntensidadI = document.getElementById("IntensidadI");
    const resultado9 = document.getElementById("resultado9");

    c.addEventListener("click", function(){ 
        const EnergiaA1 = parseFloat(EnergiaA.value); 
        const IntensidadI1 = parseFloat(IntensidadI.value); 
        const coeficienteA = EnergiaA1 / IntensidadI1;
        resultado9.value = coeficienteA.toFixed(2); 
    });
    
    