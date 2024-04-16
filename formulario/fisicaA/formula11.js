        
        const cr = document.getElementById("cr1");
        const Frecuencia3 = document.getElementById("Frecuencia3");
        const resultado10 = document.getElementById("resultado10");

        cr.addEventListener("click", function(){ 
            const Frecuencia31 = parseFloat(Frecuencia3.value); 
            const VelAngular = (2*Math.PI*Frecuencia31);
            resultado10.value = VelAngular.toFixed(2) + 'rad/s'; 
        });
        