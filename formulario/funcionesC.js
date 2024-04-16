var valorF = document.getElementById("valorF");
valorF.addEventListener('keyup', convertir);

var valorM = document.getElementById("valorM");
valorM.addEventListener('keyup', convertir);

var valorT = document.getElementById("valorT");
valorT.addEventListener('keyup', convertir);

var valorL = document.getElementById("valorL");
valorL.addEventListener('keyup', convertir);

var valort = document.getElementById("valort");
valort.addEventListener('keyup', convertir);

var resultadoF = document.getElementById("resultadoF");
var resultadoM = document.getElementById("resultadoM");
var resultadoT = document.getElementById("resultadoT");
var resultadoL = document.getElementById("resultadoL");
var resultadot = document.getElementById("resultadot");

var unidadF1 = document.getElementById("unidadF1");
unidadF1.addEventListener('change', convertir);

var unidadF2 = document.getElementById("unidadF2");
unidadF2.addEventListener('change', convertir);

var unidadM1 = document.getElementById("unidadM1");
unidadM1.addEventListener('change', convertir);

var unidadM2 = document.getElementById("unidadM2");
unidadM2.addEventListener('change', convertir);

var unidadT1 = document.getElementById("unidadT1");
unidadT1.addEventListener('change', convertir);

var unidadT2 = document.getElementById("unidadT2");
unidadT2.addEventListener('change', convertir);

var unidadL1 = document.getElementById("unidadL1");
unidadL1.addEventListener('change', convertir);

var unidadL2 = document.getElementById("unidadL2");
unidadL2.addEventListener('change', convertir);

var  unidadt1 = document.getElementById("unidadt1");
unidadt1.addEventListener('change', convertir);

var  unidadt2 = document.getElementById("unidadt2");

unidadt2.addEventListener('change', convertir);



/////////////////////7

window.onload = function() {
    var valorF = document.getElementById("valorF");
    valorF.addEventListener('keyup', convertir);

    var valorM = document.getElementById("valorM");
    valorM.addEventListener('keyup', convertir);

    var valorT = document.getElementById("valorT");
    valorT.addEventListener('keyup', convertir);

    var valorL = document.getElementById("valorL");
    valorL.addEventListener('keyup', convertir);

    var valort = document.getElementById("valort");
    valort.addEventListener('keyup', convertir);

    var unidadF1 = document.getElementById("unidadF1");
    unidadF1.addEventListener('change', convertir);

    var unidadF2 = document.getElementById("unidadF2");
    unidadF2.addEventListener('change', convertir);

    var unidadM1 = document.getElementById("unidadM1");
    unidadM1.addEventListener('change', convertir);

    var unidadM2 = document.getElementById("unidadM2");
    unidadM2.addEventListener('change', convertir);

    var unidadT1 = document.getElementById("unidadT1");
    unidadT1.addEventListener('change', convertir);

    var unidadT2 = document.getElementById("unidadT2");
    unidadT2.addEventListener('change', convertir);

    var unidadL1 = document.getElementById("unidadL1");
    unidadL1.addEventListener('change', convertir);

    var unidadL2 = document.getElementById("unidadL2");
    unidadL2.addEventListener('change', convertir);

    var unidadt1 = document.getElementById("unidadt1");
    unidadt1.addEventListener('change', convertir);

    var unidadt2 = document.getElementById("unidadt2");
    unidadt2.addEventListener('change', convertir);
};

function convertir() {
    var valorF = parseFloat(document.getElementById("valorF").value);
    var valorM = parseFloat(document.getElementById("valorM").value);
    var valorT = parseFloat(document.getElementById("valorT").value);
    var valorL = parseFloat(document.getElementById("valorL").value);
    var valort = parseFloat(document.getElementById("valort").value);

    var resultadoF = document.getElementById("resultadoF");
    var resultadoM = document.getElementById("resultadoM");
    var resultadoT = document.getElementById("resultadoT");
    var resultadoL = document.getElementById("resultadoL");
    var resultadot = document.getElementById("resultadot");


    var unidadF1 = document.getElementById("unidadF1").value;
    var unidadF2 = document.getElementById("unidadF2").value;
    var unidadM1 = document.getElementById("unidadM1").value;
    var unidadM2 = document.getElementById("unidadM2").value;
    var unidadT1 = document.getElementById("unidadT1").value;
    var unidadT2 = document.getElementById("unidadT2").value;
    var unidadL1 = document.getElementById("unidadL1").value;
    var unidadL2 = document.getElementById("unidadL2").value;
    var unidadt1 = document.getElementById("unidadt1").value;
    var unidadt2 = document.getElementById("unidadt2").value;

    // FRECUENCIA
    if (unidadF1 === "Herzios" && unidadF2 === "Herzios") {
        resultadoF.innerHTML = valorF + "Hz equivalen a " + valorF + "Hz";
    } else if (unidadF1 === "Herzios" && unidadF2 === "KHerzios") {
        resultadoF.innerHTML = valorF + "Hz equivalen a " + valorF / 1000 + "KHz";

    } else if (unidadF1 === "Herzios" && unidadF2 === "MHerzios") {
        resultadoF.innerHTML = valorF + "Hz equivalen a " + valorF / 1000000 + "MHz";

    } else if(unidadF1==="KHerzios" && unidadF2==="Herzios"){
        resultadoF.innerHTML = valorF + "KHz equivalen a "+ valorF * 1000 + "Hz";

    } else if(unidadF1=="KHerzios" && unidadF2=="KHerzios"){
       resultadoF.innerHTML = valorF + "KHz equivalen a "+ valorF * 1 + "KHz";

    } else if(unidadF1=="KHerzios" && unidadF2=="MHerzios"){
       resultadoF.innerHTML = valorF + "KHz equivalen a "+ valorF/1000 + "MHz";

    } else if(unidadF1==="MHerzios" && unidadF2==="Herzios"){
        resultadoF.innerHTML = valorF + "MHz equivalen a "+ valorF * 1000000; + "Hz";

    } else if(unidadF1=="MHerzios" && unidadF2=="KHerzios"){
       resultadoF.innerHTML = valorF + "MHz equivalen a "+ valorF * 100 + "KHz";

    } else if(unidadF1=="MHerzios" && unidadF2=="MHerzios"){
       resultadoF.innerHTML = valorF + "MHz equivalen a "+ valorF * 1 + "MHz";
    }


    // MASA
    if (unidadM1 === "Nanogramos" && unidadM2 === "Nanogramos") {
        resultadoM.innerHTML = valorM + "ng equivalen a " + valorM * 1 + "ng";

    } else if (unidadM1 === "Nanogramos" && unidadM2 === "Microgramos") {
        resultadoM.innerHTML = valorM + "ng equivalen a " + valorM / 1000 + "µg";

    } else if (unidadM1 === "Nanogramos" && unidadM2 === "Miligramos") {
        resultadoM.innerHTML = valorM + "ng equivalen a " + valorM / 1000000 + "mg";

    } else if (unidadM1 === "Nanogramos" && unidadM2 === "Gramos") {
        resultadoM.innerHTML = valorM + "ng equivalen a " + valorM / 1000000000 + "g";

    } else if (unidadM1 === "Nanogramos" && unidadM2 === "Kilogramos") {
        resultadoM.innerHTML = valorM + "ng equivalen a " + valorM / 1000000000000 + "kg";

    } else if (unidadM1 === "Nanogramos" && unidadM2 === "Toneladas") {
        resultadoM.innerHTML = valorM + "ng equivalen a " + valorM / 1000000000000000 + "ton";
    } 

    else if (unidadM1 === "Microgramos" && unidadM2 === "Nanogramos") {
        resultadoM.innerHTML = valorM + "µg equivalen a " + valorM * 1000 + "ng";

    } else if (unidadM1 === "Microgramos" && unidadM2 === "Microgramos") {
        resultadoM.innerHTML = valorM + "µg equivalen a " + valorM * 1 + "µg";

    } else if (unidadM1 === "Microgramos" && unidadM2 === "Miligramos") {
        resultadoM.innerHTML = valorM + "µg equivalen a " + valorM / 1000 + "mg";

    } else if (unidadM1 === "Microgramos" && unidadM2 === "Gramos") {
        resultadoM.innerHTML = valorM + "µg equivalen a " + valorM / 1000000 + "g";

    } else if (unidadM1 === "Microgramos" && unidadM2 === "Kilogramos") {
        resultadoM.innerHTML = valorM + "µg equivalen a " + valorM / 1000000000 + "kg";

    } else if (unidadM1 === "Microgramos" && unidadM2 === "Toneladas") {
        resultadoM.innerHTML = valorM + "µg equivalen a " + valorM / 1000000000000 + "ton";

    } else if (unidadM1 === "Miligramos" && unidadM2 === "Nanogramos") {
        resultadoM.innerHTML = valorM + "mg equivalen a " + valorM * 1000000 + "ng";

    } else if (unidadM1 === "Miligramos" && unidadM2 === "Microgramos") {
        resultadoM.innerHTML = valorM + "mg equivalen a " + valorM * 1000 + "µg";

    } else if (unidadM1 === "Miligramos" && unidadM2 === "Miligramos") {
        resultadoM.innerHTML = valorM + "mg equivalen a " + valorM * 1 + "mg";

    } else if (unidadM1 === "Miligramos" && unidadM2 === "Gramos") {
        resultadoM.innerHTML = valorM + "mg equivalen a " + valorM / 1000 + "g";

    } else if (unidadM1 === "Miligramos" && unidadM2 === "Kilogramos") {
        resultadoM.innerHTML = valorM + "mg equivalen a " + valorM / 1000000 + "kg";

    } else if (unidadM1 === "Miligramos" && unidadM2 === "Toneladas") {
        resultadoM.innerHTML = valorM + "mg equivalen a " + valorM / 1000000000 + "ton";
        
    } else if (unidadM1 === "Gramos" && unidadM2 === "Nanogramos") {
        resultadoM.innerHTML = valorM + "g equivalen a " + valorM * 1000000000 + "ng";

    } else if (unidadM1 === "Gramos" && unidadM2 === "Microgramos") {
        resultadoM.innerHTML = valorM + "g equivalen a " + valorM * 1000000 + "µg";

    } else if (unidadM1 === "Gramos" && unidadM2 === "Miligramos") {
        resultadoM.innerHTML = valorM + "g equivalen a " + valorM * 1000 + "mg";

    } else if (unidadM1 === "Gramos" && unidadM2 === "Gramos") {
        resultadoM.innerHTML = valorM + "g equivalen a " + valorM * 1 + "g";

    } else if (unidadM1 === "Gramos" && unidadM2 === "Kilogramos") {
        resultadoM.innerHTML = valorM + "g equivalen a " + valorM / 1000 + "kg";

    } else if (unidadM1 === "Gramos" && unidadM2 === "Toneladas") {
        resultadoM.innerHTML = valorM + "g equivalen a " + valorM / 1000000 + "ton";

    } else if (unidadM1 === "Kilogramos" && unidadM2 === "Nanogramos") {
        resultadoM.innerHTML = valorM + "kg equivalen a " + valorM * 1000000000000 + "ng";

    } else if (unidadM1 === "Kilogramos" && unidadM2 === "Microgramos") {
        resultadoM.innerHTML = valorM + "kg equivalen a " + valorM * 1000000000 + "µg";

    } else if (unidadM1 === "Kilogramos" && unidadM2 === "Miligramos") {
        resultadoM.innerHTML = valorM + "kg equivalen a " + valorM * 1000000 + "mg";

    } else if (unidadM1 === "Kilogramos" && unidadM2 === "Gramos") {
        resultadoM.innerHTML = valorM + "kg equivalen a " + valorM * 1000 + "g";

    } else if (unidadM1 === "Kilogramos" && unidadM2 === "Kilogramos") {
        resultadoM.innerHTML = valorM + "kg equivalen a " + valorM * 1 + "kg";

    } else if (unidadM1 === "Kilogramos" && unidadM2 === "Toneladas") {
        resultadoM.innerHTML = valorM + "kg equivalen a " + valorM / 1000 + "ton";

    } else if (unidadM1 === "Toneladas" && unidadM2 === "Nanogramos") {
        resultadoM.innerHTML = valorM + "Ton equivalen a " + valorM * 1000000000000000 + "ng";

    } else if (unidadM1 === "Toneladas" && unidadM2 === "Microgramos") {
        resultadoM.innerHTML = valorM + "Ton equivalen a " + valorM * 1000000000000 + "µg";

    } else if (unidadM1 === "Toneladas" && unidadM2 === "Miligramos") {
        resultadoM.innerHTML = valorM + "Ton equivalen a " + valorM * 1000000000 + "mg";

    } else if (unidadM1 === "Toneladas" && unidadM2 === "Gramos") {
        resultadoM.innerHTML = valorM + "Ton equivalen a " + valorM * 1000000 + "g";

    } else if (unidadM1 === "Toneladas" && unidadM2 === "Kilogramos") {
        resultadoM.innerHTML = valorM + "Ton equivalen a " + valorM * 1000 + "kg";
        
    } else if (unidadM1 === "Toneladas" && unidadM2 === "Toneladas") {
        resultadoM.innerHTML = valorM + "Ton equivalen a " + valorM * 1 + "ton";
    } 

    // TIEMPO
    if (unidadT1 === "Nanosegundos" && unidadT2 === "Nanosegundos") {
        resultadoT.innerHTML = valorT + "ng equivalen a " + valorT * 1 + "ng";

    } else if (unidadT1 === "Nanosegundos" && unidadT2 === "Microsegundos") {
        resultadoT.innerHTML = valorT + "ng equivalen a " + valorT / 1000+ "µs";

    } else if (unidadT1 === "Nanosegundos" && unidadT2 === "Milisegundos") {
        resultadoT.innerHTML = valorT + "ng equivalen a " + valorT / 1000000 + "ms";

    } else if (unidadT1 === "Nanosegundos" && unidadT2 === "Segundos") {
        resultadoT.innerHTML = valorT + "ng equivalen a " + valorT / 1000000000 + "s";

    } else if (unidadT1 === "Microsegundos" && unidadT2 === "Nanosegundos") {
        resultadoT.innerHTML = valorT + "µs equivalen a " + valorT * 1000 + "ng";

    } else if (unidadT1 === "Microsegundos" && unidadT2 === "Microsegundos") {
        resultadoT.innerHTML = valorT + "µs equivalen a " + valorT * 1+ "µs";

    } else if (unidadT1 === "Microsegundos" && unidadT2 === "Milisegundos") {
        resultadoT.innerHTML = valorT + "µs equivalen a " + valorT / 1000 + "ms";

    } else if (unidadT1 === "Microsegundos" && unidadT2 === "Segundos") {
        resultadoT.innerHTML = valorT + "µs equivalen a " + valorT / 1000000 + "s";

    } else if (unidadT1 === "Milisegundos" && unidadT2 === "Nanosegundos") {
        resultadoT.innerHTML = valorT + "ms equivalen a " + valorT * 1000000 + "ng";

    } else if (unidadT1 === "Milisegundos" && unidadT2 === "Microsegundos") {
        resultadoT.innerHTML = valorT + "ms equivalen a " + valorT * 1000 + "µs";

    } else if (unidadT1 === "Milisegundos" && unidadT2 === "Milisegundos") {
        resultadoT.innerHTML = valorT + "ms equivalen a " + valorT *1 + "ms";

    } else if (unidadT1 === "Milisegundos" && unidadT2 === "Segundos") {
        resultadoT.innerHTML = valorT + "ms equivalen a " + valorT / 1000 + "s";

    } else if (unidadT1 === "Segundos" && unidadT2 === "Nanosegundos") {
        resultadoT.innerHTML = valorT + "s equivalen a " + valorT * 1000000000 + "ng";

    } else if (unidadT1 === "Segundos" && unidadT2 === "Microsegundos") {
        resultadoT.innerHTML = valorT + "s equivalen a " + valorT * 1000000 + "µs";

    } else if (unidadT1 === "Segundos" && unidadT2 === "Milisegundos") {
        resultadoT.innerHTML = valorT + "s equivalen a " + valorT * 1000 + "ms";

    } else if (unidadT1 === "Segundos" && unidadT2 === "Segundos") {
        resultadoT.innerHTML = valorT + "s equivalen a " + valorT * 1 + "s";
    } 

    if (unidadL1 === "Nanometros" && unidadL2 === "Nanometros") {
        resultadoL.innerHTML = valorL + "nm equivalen a " + valorL * 1 + "nm";

    } else if (unidadL1 === "Nanometros" && unidadL2 === "Micrometros") {
        resultadoL.innerHTML = valorL + "nm equivalen a " + valorL / 1000 + "µm";

    } else if (unidadL1 === "Nanometros" && unidadL2 === "Milimetros") {
        resultadoL.innerHTML = valorL + "nm equivalen a " + valorL / 1000000 + "mm";

    } else if (unidadL1 === "Nanometros" && unidadL2 === "Centimetros") {
        resultadoL.innerHTML = valorL + "nm equivalen a " + valorL /10000000+ "cm";

    } else if (unidadL1 === "Nanometros" && unidadL2 === "Metros") {
        resultadoL.innerHTML = valorL + "nm equivalen a " + valorL / 1000000000 + "m";

    } else if (unidadL1 === "Nanometros" && unidadL2 === "Kilometros") {
        resultadoL.innerHTML = valorL + "nm equivalen a " + valorL / 1000000000000+ "km";

    } else if (unidadL1 === "Micrometros" && unidadL2 === "Nanometros") {
        resultadoL.innerHTML = valorL + "µm equivalen a " + valorL * 1000+ "nm";

    } else if (unidadL1 === "Micrometros" && unidadL2 === "Micrometros") {
        resultadoL.innerHTML = valorL + "µm equivalen a " + valorL * 1+ "µm";

    } else if (unidadL1 === "Micrometros" && unidadL2 === "Milimetros") {
        resultadoL.innerHTML = valorL + "µm equivalen a " + valorL / 1000+ "mm";

    } else if (unidadL1 === "Micrometros" && unidadL2 === "Centimetros") {
        resultadoL.innerHTML = valorL + "µm equivalen a " + valorL / 10000+ "cm";

    } else if (unidadL1 === "Micrometros" && unidadL2 === "Metros") {
        resultadoL.innerHTML = valorL + "µm equivalen a " + valorL / 1000000+ "m";

    } else if (unidadL1 === "Micrometros" && unidadL2 === "Kilometros") {
        resultadoL.innerHTML = valorL + "µm equivalen a " + valorL / 1000000000+ "km";

    } else if (unidadL1 === "Milimetros" && unidadL2 === "Nanometros") {
        resultadoL.innerHTML = valorL + "mm equivalen a " + valorL * 1000000+ "nm";

    } else if (unidadL1 === "Milimetros" && unidadL2 === "Micrometros") {
        resultadoL.innerHTML = valorL + "mm equivalen a " + valorL * 1000+ "µm";

    } else if (unidadL1 === "Milimetros" && unidadL2 === "Milimetros") {
        resultadoL.innerHTML = valorL + "mm equivalen a " + valorL * 1+ "mm";

    } else if (unidadL1 === "Milimetros" && unidadL2 === "Centimetros") {
        resultadoL.innerHTML = valorL + "mm equivalen a " + valorL / 10 + "cm";

    } else if (unidadL1 === "Milimetros" && unidadL2 === "Metros") {
        resultadoL.innerHTML = valorL + "mm equivalen a " + valorL / 1000+ "m";

    } else if (unidadL1 === "Milimetros" && unidadL2 === "Kilometros") {
        resultadoL.innerHTML = valorL + "mm equivalen a " + valorL / 1000000+ "km";

    } else if (unidadL1 === "Centimetros" && unidadL2 === "Nanometros") {
        resultadoL.innerHTML = valorL + "cm equivalen a " + valorL * 1000000000+ "nm";

    } else if (unidadL1 === "Centimetros" && unidadL2 === "Micrometros") {
        resultadoL.innerHTML = valorL + "cm equivalen a " + valorL * 1000000+ "µm";

    } else if (unidadL1 === "Centimetros" && unidadL2 === "Milimetros") {
        resultadoL.innerHTML = valorL + "cm equivalen a " + valorL * 10+ "mm";

    } else if (unidadL1 === "Centimetros" && unidadL2 === "Centimetros") {
        resultadoL.innerHTML = valorL + "cm equivalen a " + valorL * 1 + "cm";

    } else if (unidadL1 === "Centimetros" && unidadL2 === "Metros") {
        resultadoL.innerHTML = valorL + "cm equivalen a " + valorL / 100+ "m";

    } else if (unidadL1 === "Centimetros" && unidadL2 === "Kilometros") {
        resultadoL.innerHTML = valorL + "cm equivalen a " + valorL / 1000+ "km";

    } else if (unidadL1 === "Metros" && unidadL2 === "Nanometros") {
        resultadoL.innerHTML = valorL + "m equivalen a " + valorL * 1000000000 + "nm";

    } else if (unidadL1 === "Metros" && unidadL2 === "Micrometros") {
        resultadoL.innerHTML = valorL + "m equivalen a " + valorL * 1000000+ "µm";

    } else if (unidadL1 === "Metros" && unidadL2 === "Milimetros") {
        resultadoL.innerHTML = valorL + "m equivalen a " + valorL * 1000+ "mm";

    } else if (unidadL1 === "Metros" && unidadL2 === "Centimetros") {
        resultadoL.innerHTML = valorL + "m equivalen a " + valorL * 100 + "cm";

    } else if (unidadL1 === "Metros" && unidadL2 === "Metros") {
        resultadoL.innerHTML = valorL + "m equivalen a " + valorL * 1+ "m";

    } else if (unidadL1 === "Metros" && unidadL2 === "Kilometros") {
        resultadoL.innerHTML = valorL + "m equivalen a " + valorL / 1000+ "km";

    } else if (unidadL1 === "Kilometros" && unidadL2 === "Nanometros") {
        resultadoL.innerHTML = valorL + "Km equivalen a " + valorL * 1000000000000+ "nm";
    } else if (unidadL1 === "Kilometros" && unidadL2 === "Micrometros") {
        resultadoL.innerHTML = valorL + "Km equivalen a " + valorL * 1000000000 + "µm";
    } else if (unidadL1 === "Kilometros" && unidadL2 === "Milimetros") {
        resultadoL.innerHTML = valorL + "Km equivalen a " + valorL * 1000000+ "mm";
    } else if (unidadL1 === "Kilometros" && unidadL2 === "Centimetros") {
        resultadoL.innerHTML = valorL + "Km equivalen a " + valorL * 100000+ "cm";
    } else if (unidadL1 === "Kilometros" && unidadL2 === "Metros") {
        resultadoL.innerHTML = valorL + "Km equivalen a " + valorL * 1000+ "m";
    } else if (unidadL1 === "Kilometros" && unidadL2 === "Kilometros") {
        resultadoL.innerHTML = valorL + "Km equivalen a " + valorL * 1+ "km";
    } 
   if (unidadt1=== "Centigrados" && unidadt2==="Centigrados"){
    resultadot.innerHTML = valort + "°C equivalen a " + valort * 1 + "°C";

    } else if (unidadt1 === "Centigrados" && unidadt2 === "Farenheit") {
        resultadot.innerHTML = valort + "°C equivalen a " + (valort *(9/5)+32) + "°F";

    } else if (unidadt1 === "Centigrados" && unidadt2 === "Kelvin") {
    resultadot.innerHTML = valort + "°C equivalen a " + (valort+273.15) + "°K";K
    } else if (unidadt1 === "Farenheit" && unidadt2 === "Centigrados") {
        resultadot.innerHTML = valort + "°F equivalen a " + ((valort-32)/1.8) + "°C";

    } else if (unidadt1 === "Farenheit" && unidadt2 === "Farenheit") {
        resultadot.innerHTML = valort + "°F equivalen a " + valort * 1 + "°F";

    } else if (unidadt1 === "Farenheit" && unidadt2 === "Kelvin") {
        resultadot.innerHTML = valort + "°F equivalen a " + (valort-32 * (5/9) + 273.15) + "°K";

    } else if (unidadt1 === "Kelvin" && unidadt2 === "Centigrados") {
        resultadot.innerHTML = valort + "°K equivalen a " + (valort-273.15) + "°C";

    }else if (unidadt1 === "Kelvin" && unidadt2 === "Farenheit") {
        resultadot.innerHTML = valort + "°K equivalen a " + ((valort-273.15)*(9/5)+32) + "°F";

    }else if (unidadt1 === "Kelvin" && unidadt2 === "Kelvin") {
        resultadot.innerHTML = valort + "°K equivalen a " + valort * 1 + "°K";
    }

    
}


