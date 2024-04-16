
    const cl = document.getElementById("cl1");
    const ttiempo = document.getElementById("ttiempo");
    const vvelocidad = document.getElementById("vvelocidad");
    const resultado22 = document.getElementById("resultado22");

    cl.addEventListener("click", function(){ 
        const ttiempo1 = parseFloat(ttiempo.value); 
        const vvelocidad1 = parseFloat(vvelocidad.value); 
        const disttancia = vvelocidad1/ttiempo1;
        resultado22.value = disttancia.toFixed(4) + 'm'; 
    });
    
