/* Neste problema você tem que ler um valor inteiro e calcular o menor número possível de notas em que o valor pode ser decomposto. 
As notas possíveis são 100, 50, 20, 10, 5, 2 e 1. Imprima o valor lido e a lista de notas.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Resultado
Imprima o número lido e a quantidade mínima de cada cédula necessária em língua portuguesa, conforme o exemplo dado.
Não se esqueça de imprimir o final de linha após cada linha, caso contrário você receberá “Erro de apresentação” . */

var valor = 576;// parseInt(prompt("qtda"));

console.log(valor);

var qtdaNotas = parseInt((valor/100));
console.log(qtdaNotas,"Nota(s) de R$ 100,00");
valor = (valor % 100);

qtdaNotas = parseInt((valor/50));
console.log(qtdaNotas,"Nota(s) de R$ 50,00");
valor = (valor % 50);

qtdaNotas = parseInt((valor/20));
console.log(qtdaNotas,"Nota(s) de R$ 20,00");
valor = (valor % 20);

qtdaNotas = parseInt((valor/10));
console.log(qtdaNotas,"Nota(s) de R$ 10,00");
valor = (valor % 10);

qtdaNotas = parseInt((valor/5));
console.log(qtdaNotas,"Nota(s) de R$ 5,00");
valor = (valor % 5);

qtdaNotas = parseInt((valor/2));
console.log(qtdaNotas,"Nota(s) de R$ 2,00");
valor = (valor % 2);

qtdaNotas = parseInt((valor/1));
console.log(qtdaNotas,"Nota(s) de R$ 1,00");
valor = (valor % 1);
