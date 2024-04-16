    
    const clu = document.getElementById("clu1");
    const velociidad = document.getElementById("velociidad");
    const disstancia = document.getElementById("disstancia");
    const resultado23 = document.getElementById("resultado23");

    clu.addEventListener("click", function(){ 
        const velociidad1 = parseFloat(velociidad.value); 
        const disstancia1 = parseFloat(disstancia.value); 
        const tiemmpo = disstancia1 / velociidad1;
        resultado23.value = tiemmpo.toFixed(4) + 's'; 
    });
