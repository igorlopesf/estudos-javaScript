var a = parseFloat(prompt("Valor A:"));
var b = parseFloat(prompt("Valor B:"));
const pesoA = 3.5;
const pesoB = 7.5;

/*  = ((a* 100) / 100).toFixed(1);
        b = ((b* 100) / 100).toFixed(1); */
var media = ((a * pesoA + b * pesoB) / (pesoA + pesoB)).toFixed(5);

console.log(`MEDIA = ${media}`);
