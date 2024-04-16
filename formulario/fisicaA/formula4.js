    const calcular = document.getElementById("calcular1");
    const velocidadonda = document.getElementById("velocidadonda");
    const frecuencia1 = document.getElementById("frecuencia1");
    const resultado3 = document.getElementById("resultado3");

    calcular.addEventListener("click", function(){ 
        const velocidadonda1 = parseFloat(velocidadonda.value); 
        const frecuencia11 = parseFloat(frecuencia1.value); 
        const longitudonda11 = velocidadonda1 / frecuencia11;
        resultado3.value = longitudonda11.toFixed(2) + 'm'; 
    });
    
    
            