    const calcu = document.getElementById("calcu1");
    const amplitud = document.getElementById("amplitud");
    const numeroDeOnda = document.getElementById("numeroDeOnda");
    const frecuenciaAngular = document.getElementById("frecuenciaAngular");
    const faseInicial = document.getElementById("faseInicial");
    const posicionX = document.getElementById("posicionX");
    const tiempo = document.getElementById("tiempo");
    const resultado = document.getElementById("resultado");

    calcu.addEventListener("click", function(){
        const amplitud1 = parseFloat(amplitud.value);
        const numeroDeOnda1 = parseFloat(numeroDeOnda.value);
        const frecuenciaAngular1 = parseFloat(frecuenciaAngular.value);
        const faseInicial1 = parseFloat(faseInicial.value);
        const posicionX1 = parseFloat(posicionX.value);
        const tiempo1 = parseFloat(tiempo.value);
        const y = amplitud1 * Math.sin(numeroDeOnda1 * posicionX1 - frecuenciaAngular1 * tiempo1 + faseInicial1);
        resultado.value = y.toFixed(20);
    });
    