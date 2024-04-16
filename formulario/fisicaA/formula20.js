    
    document.getElementById("cu1").addEventListener("click", function () {
    var Dmax = parseFloat(document.getElementById("Dmax").value);
    var Dmin = parseFloat(document.getElementById("Dmin").value);
    var pp = parseFloat(document.getElementById("pp").value);
    var vv = parseFloat(document.getElementById("vv").value);
  
    var A = (Dmax - Dmin) / 2; // amplitud
    var T = pp / (A * vv); // periodo
    var f = 1 / T; // frecuencia
    var w = 2 * Math.PI * f; // frecuencia angular
  
    var I = (A * pp) / T; // intensidad
  
    document.getElementById("resultado20").value = I;
  });