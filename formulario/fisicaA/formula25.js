    
    const cluar = document.getElementById("cluar1");
    const nn = document.getElementById("nn");
    const tt1 = document.getElementById("tt1");
    const resultado25 = document.getElementById("resultado25");
    
    cluar.addEventListener("click", function(){ 
        const nn1 = parseFloat(nn.value); 
        const tt11 = parseFloat(tt1.value); 
        const w2 = ((2*Math.PI)*nn1)/tt11;
        resultado25.value = w2.toFixed(4) + 'rad/s'; 
    });
