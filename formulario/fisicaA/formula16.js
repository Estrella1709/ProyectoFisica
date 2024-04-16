    
    const car = document.getElementById("car1");
    const MMY = document.getElementById("MMY");
    const densidad = document.getElementById("densidad");
    const resultado15 = document.getElementById("resultado15");

    car.addEventListener("click", function(){ 
        const MY1 = parseFloat(MMY.value); 
        const densidad1 = parseFloat(densidad.value); 
        const rapidez = Math.sqrt(MY1/densidad1);
        resultado15.value = rapidez.toFixed(2) + 'm/s'; 
    });
