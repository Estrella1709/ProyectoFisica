        
        const cc = document.getElementById("cc1");
        const TonooA = document.getElementById("TonooA");
        const velocidadd = document.getElementById("velocidadd");
        const Longitudd = document.getElementById("Longitudd");
        const resultado13 = document.getElementById("resultado13");

        cc.addEventListener("click", function(){ 
            const TonooA1 = parseFloat(TonooA.value); 
            const velocidadd1 = parseFloat(velocidadd.value); 
            const Longitudd1 = parseFloat(Longitudd.value); 
            const Fn = (TonooA1*velocidadd1)/(4*Longitudd1);
            resultado13.value = Fn.toFixed(2) + 'rad/m'; 
        });
        