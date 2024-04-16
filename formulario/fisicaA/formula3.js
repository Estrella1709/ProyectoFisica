    
    const calcula = document.getElementById("calcula1");
    const frecuencia = document.getElementById("frecuencia");
    const longitudonda = document.getElementById("longitudonda");
    const resultado2 = document.getElementById("resultado2")

    calcula.addEventListener("click", function(){ 
        const frecuencia1 = parseFloat(frecuencia.value); 
        const longitudonda1 = parseFloat(longitudonda.value); 
        const velocidadonda = frecuencia1 * longitudonda1;
        resultado2.value = velocidadonda.toFixed(2) + 'm/s'; 
    });
    