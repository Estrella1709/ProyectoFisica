    
    const clua = document.getElementById("clua1");
    const ppp = document.getElementById("ppp");
    const AAA = document.getElementById("AAA");
    const www = document.getElementById("www");
    const kk = document.getElementById("kk");
    const resultado24 = document.getElementById("resultado24");

    clua.addEventListener("click", function(){ 
        const ppp1 = parseFloat(ppp.value); 
        const AAA1 = parseFloat(AAA.value); 
        const www1 = parseFloat(www.value); 
        const kk1 = parseFloat(kk.value); 
        const intensidadOO = (1/2* (ppp1*(Math.pow(www1,2)))* (Math.pow(AAA1,2))*(Math.pow(kk1,2))); 
        resultado24.value = intensidadOO.toFixed(4); 
    });
    