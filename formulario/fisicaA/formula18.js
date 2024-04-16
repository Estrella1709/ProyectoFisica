    
    const acrc = document.getElementById("acrc1");
    const p = document.getElementById("p");
    const r = document.getElementById("r");
    const resultado18 = document.getElementById("resultado18");

    acrc.addEventListener("click", function(){ 
        const p1 = parseFloat(p.value); 
        const r1 = parseFloat(r.value); 
        const i1 = (p1 / (4 * Math.PI * Math.pow(r1, 2)));
        resultado18.value = i1.toFixed(4) + 'W/m^2'; 
    });
    
