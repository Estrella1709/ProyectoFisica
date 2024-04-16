    const cac = document.getElementById("cac1");
    const VelLuzVacio = document.getElementById("VelLuzVacio");
    const VelLuzMedio = document.getElementById("VelLuzMedio");
    const resultado7 = document.getElementById("resultado7");

    cac.addEventListener("click", function(){ 
        const VelLuzVacio1 = parseFloat(VelLuzVacio.value); 
        const VelLuzMedio1 = parseFloat(VelLuzMedio.value); 
        const Irefraccion = VelLuzVacio1 / VelLuzMedio1;
        resultado7.value = Irefraccion.toFixed(2); 
    });
    
