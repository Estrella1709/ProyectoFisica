    
    const ca = document.getElementById("ca1");
    const radio = document.getElementById("radio");
    const frecuencia2221 = document.getElementById("frecuencia2221");
    const resultado6 = document.getElementById("resultado6");

    ca.addEventListener("click", function(){ 
        const frecuencia222 = parseFloat(frecuencia2221.value); 
        const radio1 = parseFloat(radio.value); 
        const velocidadAngular1 = 2 * Math.PI * frecuencia222 * radio1;
        resultado6.value = velocidadAngular1.toFixed(2) + 'rad/s'; 
    });
    