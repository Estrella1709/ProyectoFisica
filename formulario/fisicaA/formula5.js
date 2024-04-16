    
    const calc = document.getElementById("calc1");
    const frecuencia111 = document.getElementById("frecuencia111");
    const resultado4 = document.getElementById("resultado4");

    calc.addEventListener("click", function(){ 
        const frecuencia22 = parseFloat(frecuencia111.value); 
        const periodo = 1 / frecuencia22;
        resultado4.value = periodo.toFixed(2) + 's'; 
    });
    