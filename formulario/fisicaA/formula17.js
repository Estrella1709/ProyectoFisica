
    const acc = document.getElementById("acc1");
    const constanteeA = document.getElementById("constanteeA");
    const teempC = document.getElementById("teempC");
    const masaa = document.getElementById("masaa");
    const resultado16 = document.getElementById("resultado16");

    acc.addEventListener("click", function(){ 
        const constanteeA1 = parseFloat(constanteeA.value); 
        const teempC1 = parseFloat(teempC.value); 
        const masa1 = parseFloat(masaa.value); 
        const tempK = (teempC1 + 273);
        const ConstanteR = 8.314;
        const rapidezz = Math.sqrt((constanteeA1 * ConstanteR * tempK)/(masa1));
        resultado16.value = rapidezz.toFixed(4) + 'm/s'; 
    });

    