    
    const aacr = document.getElementById("aacr1");
    const aamplitudd = document.getElementById("aamplitudd");
    const frecuenciaAngularr = document.getElementById("frecuenciaAngularr");
    const resultado19 = document.getElementById("resultado19");

    aacr.addEventListener("click", function(){ 
        const aamplitudd1 = parseFloat(aamplitudd.value); 
        const frecuenciaAngularr1 = parseFloat(frecuenciaAngularr.value); 
        const intensidaad = (1 / 2) * Math.pow(aamplitudd1, 2) * Math.pow(frecuenciaAngularr1, 2);
        resultado19.value = intensidaad.toFixed(4) + 'W/m^2'; 
    });
    