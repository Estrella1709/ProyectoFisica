    
    const cal = document.getElementById("cal1");
    const frecuencia121 = document.getElementById("frecuencia121");
    const resultado5 = document.getElementById("resultado5");

    cal.addEventListener("click", function(){ 
        const frecuencia122 = parseFloat(frecuencia121.value); 
        const frecuenciaAngular = 2 * Math.PI * frecuencia122;
        resultado5.value = frecuenciaAngular.toFixed(2) + 'rad/s'; 
    });
    