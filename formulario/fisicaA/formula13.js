    
    const ccc = document.getElementById("ccc1");
    const VelocidaddA = document.getElementById("VelocidaddA");
    const Amplitudd = document.getElementById("Amplitudd");
    const tiempoo = document.getElementById("tiempoo");
    const resultado12 = document.getElementById("resultado12");

    ccc.addEventListener("click", function(){ 
        const VelocidaddA1 = parseFloat(VelocidaddA.value); 
        const Amplitudd1 = parseFloat(Amplitudd.value); 
        const tiempoo1 = parseFloat(tiempoo.value); 
        const valorOndaa = Amplitudd1 * Math.sin(VelocidaddA1 * tiempoo1);
        resultado12.value = valorOndaa.toFixed(2); 
    });
    
    