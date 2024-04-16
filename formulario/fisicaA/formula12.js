    
    const cra = document.getElementById("cra1");
    const longitudonda1 = document.getElementById("longitudonda1");
    const resultado11 = document.getElementById("resultado11");

    cra.addEventListener("click", function(){ 
        const longitudonda11 = parseFloat(longitudonda1.value); 
        const numeroOnda= (2*Math.PI)/longitudonda11;
        resultado11.value = numeroOnda.toFixed(2) + 'rad/m'; 
    });
    