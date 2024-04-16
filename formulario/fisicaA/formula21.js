    
    const cur = document.getElementById("cur1");
    const distance = document.getElementById("distance");
    const tieempo = document.getElementById("tieempo");
    const resultado21 = document.getElementById("resultado21");

    cur.addEventListener("click", function(){ 
        const distance1 = parseFloat(distance.value); 
        const tieempo1 = parseFloat(tieempo.value); 
        const veloocidad = distance1/tieempo1;
        resultado21.value = veloocidad.toFixed(4) + 'm/s'; 
    });
    